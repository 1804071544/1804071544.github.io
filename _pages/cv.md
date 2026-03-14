---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in [Discipline], [University], [Expected Year]
* M.S. in [Discipline], [University], [Year]
* B.S. in [Discipline], [University], [Year]

Appointments
======
* [Current Position], [Department], [Institution], [Start Year]-Present
* [Previous Position], [Institution], [Years]
* [Earlier Position], [Institution], [Years]

Selected Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Notes
======
* Replace the placeholders above with entries from your current CV.
* Add awards, service, grants, or teaching only when you are ready to maintain those sections.
