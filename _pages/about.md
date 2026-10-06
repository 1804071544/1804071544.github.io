---
permalink: /
title: "Enzhao Zhu"
hide_title: true
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% assign first_author_pubs = site.publications | where: "first_author", true | reverse %}

<section class="academic-home">
  <header class="ah-hero">
    <p class="ah-eyebrow">Remote Sensing &middot; Geospatial AI</p>
    <h1 class="ah-hero__name">Enzhao Zhu</h1>
    <p class="ah-hero__role">Ph.D. Student, University of Pavia</p>
    <ul class="ah-hero__meta">
      <li><i class="fas fa-fw fa-user-graduate" aria-hidden="true"></i> Supervisors: <a href="https://scholar.google.com/citations?user=9fiHXGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Paolo Gamba</a>, <a href="https://scholar.google.com/citations?user=qQA2uGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Alim Samat</a></li>
      <li><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> <a href="mailto:enzhao.zhu01@universitadipavia.it">enzhao.zhu01@universitadipavia.it</a></li>
    </ul>
    <p class="ah-lead">
      I am currently a Ph.D. student at the University of Pavia, working with <a href="https://scholar.google.com/citations?user=9fiHXGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Paolo Gamba</a>.
      Previously, I completed my M.Sc. in Cartography and Geographic Information System at the University of Chinese
      Academy of Sciences and my B.Sc. in Marine Technology (GIS) at Ocean University of China.
    </p>
    <p class="ah-lead">
      The primary focus of my research is remote sensing and geospatial machine learning for land-cover classification,
      wetland monitoring, and surface-water analysis in arid environments. My goal is to explore effective approaches
      that reduce dependence on large-scale manual annotation when addressing challenging Earth observation tasks.
      Therefore, I am particularly interested in unsupervised domain adaptation, semi-supervised and weakly supervised
      learning, positive-unlabeled learning, and robust classification across sensors and regions.
    </p>
    <div class="ah-hero__actions">
      <a class="ah-btn ah-btn--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="ah-btn" href="{{ '/cv/' | relative_url }}">Curriculum Vitae</a>
      {% if site.author.googlescholar %}<a class="ah-btn" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>{% endif %}
    </div>
  </header>

  <section class="ah-section">
    <div class="ah-section__head">
      <h2 class="ah-section__title">Selected Publications</h2>
      <a class="ah-more" href="{{ '/publications/' | relative_url }}">All publications &rarr;</a>
    </div>
    <div class="pub-list pub-list--compact">
      {% for post in first_author_pubs %}
        {% include publication-item.html pub=post %}
      {% endfor %}
    </div>
  </section>
</section>
