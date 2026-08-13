---
layout: page
permalink: /repositories/
title: Code
description: Public workflow and portfolio repositories.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

The public pipeline repository represents only a subset of production work. Client data, internal systems, and non-public analysis code are intentionally excluded.
