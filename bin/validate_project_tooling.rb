#!/usr/bin/env ruby

require "yaml"

ROOT = File.expand_path("..", __dir__)
DATA_PATH = File.join(ROOT, "_data", "project_tooling.yml")
PROJECT_DIR = File.join(ROOT, "_projects")

REQUIRED_ENTRY_FIELDS = %w[name kind role input output usage_status pipeline_state].freeze
ALLOWED_KINDS = %w[tool library workflow-engine platform method review].freeze
ALLOWED_USAGE = %w[used evaluated prototype planned].freeze
ALLOWED_PIPELINE_STATES = %w[active-rule implemented-not-wired configured-only documented-only not-applicable].freeze
PRIVATE_PATTERNS = [%r{/Users/}, %r{/home/}, %r{/data/}, %r{/disk\d*/}, /password/i, /secret/i, /token/i].freeze

errors = []
abort "Missing #{DATA_PATH}" unless File.file?(DATA_PATH)

data = YAML.safe_load(File.read(DATA_PATH), aliases: false)
unless data.is_a?(Hash) && !data.empty?
  abort "#{DATA_PATH} must contain a non-empty mapping"
end

data.each do |project_slug, project|
  project_path = File.join(PROJECT_DIR, "#{project_slug}.md")
  unless File.file?(project_path)
    errors << "#{project_slug}: no matching _projects/#{project_slug}.md"
    next
  end

  source = File.read(project_path)
  workflows = project.is_a?(Hash) ? project["workflows"] : nil
  unless workflows.is_a?(Hash) && !workflows.empty?
    errors << "#{project_slug}: workflows must be a non-empty mapping"
    next
  end

  workflows.each do |workflow_id, workflow|
    include_pattern = /project_tool_explorer\.liquid[^%]*workflow=["']#{Regexp.escape(workflow_id)}["']/
    errors << "#{project_slug}/#{workflow_id}: explorer include not found" unless source.match?(include_pattern)

    wrapper_pattern = /<div class=["']project-tool-workflow["'][^>]*data-workflow-id=["']#{Regexp.escape(workflow_id)}["'][^>]*>(.*?)<\/div>/m
    workflow_source = source[wrapper_pattern, 1]
    unless workflow_source
      errors << "#{project_slug}/#{workflow_id}: workflow wrapper not found"
      next
    end

    nodes = workflow.is_a?(Hash) ? workflow["nodes"] : nil
    unless nodes.is_a?(Hash) && !nodes.empty?
      errors << "#{project_slug}/#{workflow_id}: nodes must be a non-empty mapping"
      next
    end

    display_only_nodes = workflow["display_only_nodes"]
    unless display_only_nodes.is_a?(Array)
      errors << "#{project_slug}/#{workflow_id}: display_only_nodes must be a list"
      display_only_nodes = []
    end

    source_nodes = workflow_source.scan(/^\s*([A-Za-z][A-Za-z0-9_]*)\s*[\[({]/).flatten
    destination_nodes = workflow_source.scan(/-->\s*(?:\|[^|]*\|\s*)?([A-Za-z][A-Za-z0-9_]*)\s*[\[({]/).flatten
    diagram_nodes = (source_nodes + destination_nodes).uniq
    data_nodes = nodes.keys
    duplicate_nodes = data_nodes & display_only_nodes
    unclassified_nodes = diagram_nodes - data_nodes - display_only_nodes
    unknown_nodes = (data_nodes + display_only_nodes).uniq - diagram_nodes
    classed_nodes = workflow_source.scan(/^\s*class\s+([A-Za-z0-9_,]+)\s+project-tool-node\s*$/).flatten.flat_map { |ids| ids.split(",") }

    errors << "#{project_slug}/#{workflow_id}: nodes cannot be both interactive and display-only: #{duplicate_nodes.join(', ')}" unless duplicate_nodes.empty?
    errors << "#{project_slug}/#{workflow_id}: unclassified Mermaid nodes: #{unclassified_nodes.join(', ')}" unless unclassified_nodes.empty?
    errors << "#{project_slug}/#{workflow_id}: declared nodes missing from Mermaid: #{unknown_nodes.join(', ')}" unless unknown_nodes.empty?
    missing_classes = data_nodes - classed_nodes
    unexpected_classes = classed_nodes - data_nodes
    errors << "#{project_slug}/#{workflow_id}: interactive nodes missing project-tool-node class: #{missing_classes.join(', ')}" unless missing_classes.empty?
    errors << "#{project_slug}/#{workflow_id}: display-only or unknown nodes marked interactive: #{unexpected_classes.join(', ')}" unless unexpected_classes.empty?

    nodes.each do |node_id, node|
      node_pattern = /\b#{Regexp.escape(node_id)}\s*[\[({]/
      errors << "#{project_slug}/#{workflow_id}/#{node_id}: Mermaid node not found" unless workflow_source.match?(node_pattern)

      label = node.is_a?(Hash) ? node["label"] : nil
      entries = node.is_a?(Hash) ? node["entries"] : nil
      errors << "#{project_slug}/#{workflow_id}/#{node_id}: label is required" if label.to_s.strip.empty?
      unless entries.is_a?(Array) && !entries.empty?
        errors << "#{project_slug}/#{workflow_id}/#{node_id}: entries must be a non-empty list"
        next
      end

      entries.each_with_index do |entry, index|
        prefix = "#{project_slug}/#{workflow_id}/#{node_id}/entry-#{index + 1}"
        unless entry.is_a?(Hash)
          errors << "#{prefix}: entry must be a mapping"
          next
        end

        missing = REQUIRED_ENTRY_FIELDS.select { |field| entry[field].to_s.strip.empty? }
        errors << "#{prefix}: missing #{missing.join(', ')}" unless missing.empty?
        errors << "#{prefix}: invalid kind #{entry['kind'].inspect}" unless ALLOWED_KINDS.include?(entry["kind"])
        errors << "#{prefix}: invalid usage_status #{entry['usage_status'].inspect}" unless ALLOWED_USAGE.include?(entry["usage_status"])
        unless ALLOWED_PIPELINE_STATES.include?(entry["pipeline_state"])
          errors << "#{prefix}: invalid pipeline_state #{entry['pipeline_state'].inspect}"
        end

        serialized = entry.values.compact.join(" ")
        PRIVATE_PATTERNS.each do |pattern|
          errors << "#{prefix}: contains private pattern #{pattern.inspect}" if serialized.match?(pattern)
        end
      end
    end
  end
end

if errors.empty?
  puts "Validated #{data.length} projects in _data/project_tooling.yml"
else
  warn errors.join("\n")
  exit 1
end
