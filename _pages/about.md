---
permalink: /
title: "Enzhao Zhu"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="academic-home">
  <div class="academic-home__hero">
    <p class="academic-home__eyebrow">Remote Sensing / Geospatial AI</p>
    <h1 class="academic-home__title">Enzhao Zhu</h1>
    <div class="academic-home__intro-meta">
      <p><strong>Current Position:</strong> Ph.D. student, University of Pavia</p>
      <p><strong>Supervisor:</strong> Prof. Paolo Gamba</p>
      <p><strong>Email:</strong> <a href="mailto:zhuenzhao22@mails.ucas.ac.cn">zhuenzhao22@mails.ucas.ac.cn</a></p>
    </div>
    <p class="academic-home__lead">
      I am currently a Ph.D. student at the University of Pavia, working with Prof. Paolo Gamba.
      Previously, I completed my M.Sc. in Cartography and Geographic Information System at the University of Chinese
      Academy of Sciences and my B.Sc. in Marine Technology (GIS) at Ocean University of China.
    </p>
    <p class="academic-home__lead">
      The primary focus of my research is remote sensing and geospatial machine learning for land-cover classification,
      wetland monitoring, and surface-water analysis in arid environments. My goal is to explore effective approaches
      that reduce dependence on large-scale manual annotation when addressing challenging Earth observation tasks.
      Therefore, I am particularly interested in unsupervised domain adaptation, semi-supervised and weakly supervised
      learning, positive-unlabeled learning, and robust classification across sensors and regions.
    </p>
    <div class="academic-home__cta-row">
      <a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">Browse Publications</a>
      <a class="btn btn--inverse" href="{{ '/cv/' | relative_url }}">View CV</a>
    </div>
    <div class="academic-home__hero-facts">
      <div class="academic-home__fact">
        <span class="academic-home__fact-value">3</span>
        <span class="academic-home__fact-label">First-author articles</span>
      </div>
      <div class="academic-home__fact">
        <span class="academic-home__fact-value">4</span>
        <span class="academic-home__fact-label">Research Projects</span>
      </div>
      <div class="academic-home__fact">
        <span class="academic-home__fact-value">6</span>
        <span class="academic-home__fact-label">Conferences</span>
      </div>
      <div class="academic-home__fact">
        <span class="academic-home__fact-value">GIS + AI</span>
        <span class="academic-home__fact-label">Core Focus</span>
      </div>
    </div>
  </div>

  <div class="academic-home__stack">
    <section class="academic-home__section">
      <h2>Research Interests</h2>
      <ul class="academic-home__list">
        <li>Remote sensing for wetland, grassland, and surface-water monitoring in arid regions.</li>
        <li>Weakly supervised learning, positive-unlabeled learning, and domain adaptation for image classification.</li>
        <li>Geospatial AI using Jilin-1, Sentinel-2, hyperspectral imagery, and long-term Earth observation archives.</li>
      </ul>
    </section>

    <section class="academic-home__section academic-home__section--accent">
      <h2>Research Snapshot</h2>
      <p>
        My research centers on how Earth observation data and learning-based methods can be combined to improve
        environmental monitoring in data-scarce and ecologically sensitive regions. I am especially interested in
        classification settings where labels are limited, noisy, or weak, and in building methods that remain useful
        across sensors, locations, and time periods.
      </p>
      <p>
        Application domains include arid wetlands, alpine grasslands, invasive plant detection, and long-term
        hydrological change analysis in Central Asia and northwestern China.
      </p>
    </section>

    <section class="academic-home__section">
      <h2>Education</h2>
      <ul class="academic-home__timeline">
        <li>
          <strong>M.Sc. in Cartography and Geographic Information System</strong><br>
          University of Chinese Academy of Sciences, 2022-2025
        </li>
        <li>
          <strong>B.Sc. in Marine Technology (GIS)</strong><br>
          Ocean University of China, 2018-2022
        </li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Appointments</h2>
      <ul class="academic-home__timeline">
        <li>
          <strong>Graduate Researcher</strong><br>
          State Key Laboratory of Ecological Safety and Sustainable Development in Arid Lands, 2022-2025
        </li>
        <li>
          <strong>M.Sc. Research Student</strong><br>
          University of Chinese Academy of Sciences, 2022-2025
        </li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Current Project Themes</h2>
      <div class="academic-home__cards">
        <article class="academic-home__mini-card">
          <h3>Wetland Vegetation Classification</h3>
          <p>Weakly supervised learning for vegetation cover mapping in arid wetlands.</p>
        </article>
        <article class="academic-home__mini-card">
          <h3>Surface Water Dynamics</h3>
          <p>Long-term extraction and climatic analysis of monthly water-area variation in the Irtysh River Basin.</p>
        </article>
        <article class="academic-home__mini-card">
          <h3>Invasive Plant Detection</h3>
          <p>Positive-unlabeled learning for mapping <em>Pedicularis kansuensis</em> in alpine wetland and grassland systems.</p>
        </article>
        <article class="academic-home__mini-card">
          <h3>Transfer Learning for RS</h3>
          <p>Domain adaptation and discriminative feature augmentation for robust remote-sensing classification.</p>
        </article>
      </div>
    </section>

    <section class="academic-home__section">
      <h2>First-Author Publications</h2>
      <p class="academic-home__note">Articles selected from my Google Scholar profile where I am listed as the first author.</p>
      <div class="academic-home__publications">
        {% for post in site.publications reversed %}
          <article class="academic-home__publication">
            <p class="academic-home__publication-meta">
              <span>{{ post.venue }}</span>
              {% if post.date %}<span>{{ post.date | date: "%Y" }}</span>{% endif %}
              {% if post.doi %}<a href="https://doi.org/{{ post.doi }}">DOI</a>{% endif %}
            </p>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html | strip }}</p>{% endif %}
          </article>
        {% endfor %}
      </div>
      <p><a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">View all publications</a></p>
    </section>

    <section class="academic-home__section">
      <h2>Methods and Tools</h2>
      <ul class="academic-home__tag-list">
        <li>Remote Sensing</li>
        <li>Deep Learning</li>
        <li>Weakly Supervised Learning</li>
        <li>Positive-Unlabeled Learning</li>
        <li>Domain Adaptation</li>
        <li>Jilin-1</li>
        <li>Sentinel-2</li>
        <li>Hyperspectral Imaging</li>
        <li>ArcGIS</li>
        <li>ENVI</li>
        <li>MATLAB</li>
        <li>Python</li>
        <li>Google Earth Engine</li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Conference Participation</h2>
      <ul class="academic-home__timeline">
        <li><strong>China Forum on Wetland Remote Sensing</strong><br>2024</li>
        <li><strong>The Ninth National Symposium on Digital Mountain</strong><br>2024</li>
        <li><strong>China Wetland Forum</strong><br>2024</li>
        <li><strong>The First National Conference on Information Geography</strong><br>2023</li>
      </ul>
    </section>
  </div>
</section>
