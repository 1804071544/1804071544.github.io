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
    <p class="academic-home__eyebrow">Researcher / Academic Profile</p>
    <h1 class="academic-home__title">Enzhao Zhu</h1>
    <p class="academic-home__lead">
      Enzhao Zhu works on remote sensing and geospatial machine learning, with a focus on weakly supervised learning,
      land-cover classification, wetland monitoring, and surface-water dynamics in arid environments. His recent work
      combines multi-source satellite imagery with representation learning and transfer learning to study ecological
      processes and vegetation patterns in wetlands and drylands.
    </p>
  </div>

  <div class="academic-home__grid">
    <section class="academic-home__section">
      <h2>Research Interests</h2>
      <ul class="academic-home__list">
        <li>Remote sensing for wetland, grassland, and surface-water monitoring in arid regions.</li>
        <li>Weakly supervised learning, positive-unlabeled learning, and domain adaptation for image classification.</li>
        <li>Geospatial AI using Jilin-1, Sentinel-2, hyperspectral imagery, and long-term Earth observation archives.</li>
      </ul>
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
      <h2>Selected Publications</h2>
      <p class="academic-home__note">Selected articles on remote sensing, wetland monitoring, and geospatial machine learning.</p>
      <div class="academic-home__publications">
        {% for post in site.publications reversed limit:4 %}
          <article class="academic-home__publication">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.venue }}{% if post.date %}, {{ post.date | date: "%Y" }}{% endif %}</p>
            {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html | strip }}</p>{% endif %}
          </article>
        {% endfor %}
      </div>
      <p><a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">View all publications</a></p>
    </section>
  </div>
</section>
