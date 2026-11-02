---
permalink: /
title: "Enzhao Zhu"
layout: home
redirect_from: 
  - /about/
  - /about.html
---

{% assign first_author_pubs = site.publications | where: "first_author", true | reverse %}

<section class="hero">
  <div class="site-container hero__grid">
    <div class="hero__text">
      <p class="hero__eyebrow"><span class="mono">45.19°N 9.16°E</span> Remote Sensing &middot; Geospatial AI</p>
      <h1 class="hero__name">Enzhao Zhu</h1>
      <p class="hero__role">Ph.D. Student, University of Pavia</p>
      <ul class="hero__meta">
        <li><i class="fas fa-fw fa-user-graduate" aria-hidden="true"></i> Supervisors: <a href="https://scholar.google.com/citations?user=9fiHXGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Paolo Gamba</a>, <a href="https://scholar.google.com/citations?user=qQA2uGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Alim Samat</a></li>
        <li><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> <a href="mailto:enzhao.zhu01@universitadipavia.it">enzhao.zhu01@universitadipavia.it</a></li>
      </ul>
      <p class="hero__lead">
        I am currently a Ph.D. student at the University of Pavia, working with <a href="https://scholar.google.com/citations?user=9fiHXGwAAAAJ&hl=en" target="_blank" rel="noopener">Prof. Paolo Gamba</a>.
        Previously, I completed my M.Sc. in Cartography and Geographic Information System at the University of Chinese
        Academy of Sciences and my B.Sc. in Marine Technology (GIS) at Ocean University of China.
      </p>
      <p class="hero__lead">
        The primary focus of my research is remote sensing and geospatial machine learning for land-cover classification,
        wetland monitoring, and surface-water analysis in arid environments. My goal is to explore effective approaches
        that reduce dependence on large-scale manual annotation when addressing challenging Earth observation tasks.
        Therefore, I am particularly interested in unsupervised domain adaptation, semi-supervised and weakly supervised
        learning, positive-unlabeled learning, and robust classification across sensors and regions.
      </p>
      <div class="hero__actions">
        <a class="ah-btn ah-btn--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
        <a class="ah-btn" href="{{ '/cv/' | relative_url }}">Curriculum Vitae</a>
        {% include profile-links.html %}
      </div>
    </div>

    <figure class="hero__portrait">
      <div class="orbit" aria-hidden="true"><span class="orbit__sat"></span></div>
      <img src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="Portrait of Enzhao Zhu" fetchpriority="high">
    </figure>
  </div>
</section>

{% include study-map.html %}

<section class="home-section">
  <div class="site-container">
    <div class="section-head section-head--row">
      <div>
        <p class="section-head__eyebrow">Research output</p>
        <h2 class="section-head__title">Selected Publications</h2>
      </div>
      <a class="ah-more" href="{{ '/publications/' | relative_url }}">All publications &rarr;</a>
    </div>
    <div class="pub-list pub-list--compact">
      {% for post in first_author_pubs %}
        {% include publication-item.html pub=post %}
      {% endfor %}
    </div>
  </div>
</section>
