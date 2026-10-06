---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% assign first_author_count = site.publications | where: "first_author", true | size %}

<div class="resume">

  <section class="resume-section">
    <h2 class="resume-section__title">Education</h2>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>Ph.D.</h3>
        <span class="resume-entry__date">Current</span>
      </div>
      <p class="resume-entry__org">University of Pavia, Italy</p>
    </div>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>M.Sc. in Cartography and Geographic Information System</h3>
        <span class="resume-entry__date">09/2022 &ndash; 06/2025</span>
      </div>
      <p class="resume-entry__org">University of Chinese Academy of Sciences</p>
      <ul>
        <li>Thesis: Weakly Supervised Learning Based Remote Sensing Vegetation Classification in Arid Wetland</li>
        <li>GPA: 3.74 / 4.0</li>
      </ul>
    </div>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>B.Sc. in Marine Technology (GIS)</h3>
        <span class="resume-entry__date">09/2018 &ndash; 06/2022</span>
      </div>
      <p class="resume-entry__org">Ocean University of China</p>
      <ul>
        <li>Thesis: Observation of Smoke Transmission in Large-Scale Forest Fire Based on Spaceborne Lidar ALADIN and CALIOP</li>
        <li>GPA: 2.81 / 4.0</li>
      </ul>
    </div>
  </section>

  <section class="resume-section">
    <h2 class="resume-section__title">Research Projects</h2>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>Weakly Supervised Learning Methods for Remote Sensing-Based Vegetation Cover Classification in Arid Regions</h3>
        <span class="resume-entry__date">01/2023 &ndash; 12/2026</span>
      </div>
      <p>Led field investigations of arid-zone wetlands and developed vegetation classification algorithms.</p>
    </div>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>Spatiotemporal Patterns, Dynamics, and Invasion Risk Early Warning of <em>Pedicularis kansuensis</em> in the Bayinbuluke Grassland</h3>
        <span class="resume-entry__date">01/2023 &ndash; 12/2025</span>
      </div>
      <p>Participated in field surveys and developed weakly supervised learning algorithms for invasive plant mapping.</p>
    </div>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>Distribution of Ecologically Sensitive Wetlands and Ecological Water Requirements in the Lower Irtysh River</h3>
        <span class="resume-entry__date">10/2022 &ndash; 09/2025</span>
      </div>
      <p>Developed surface-water extraction algorithms and generated monthly surface-water dynamics for the Irtysh River Basin from 1985 to 2022.</p>
    </div>
    <div class="resume-entry">
      <div class="resume-entry__head">
        <h3>Fine-Scale Urban Land Cover Classification in Central Asia Based on Sample and Feature Transfer</h3>
        <span class="resume-entry__date">01/2021 &ndash; 12/2024</span>
      </div>
      <p>Debugged and optimized domain adaptation and transfer learning algorithms.</p>
    </div>
  </section>

  <section class="resume-section">
    <h2 class="resume-section__title">Publications</h2>
    <p>
      {{ site.publications | size }} peer-reviewed journal articles, including {{ first_author_count }} as first author.
      See the <a href="{{ '/publications/' | relative_url }}">Publications</a> page for the full list.
    </p>
  </section>

  <section class="resume-section">
    <h2 class="resume-section__title">Skills</h2>
    <dl class="resume-skills">
      <dt>Languages</dt>
      <dd>Chinese (native), English (fluent; CET-4, CET-6)</dd>
      <dt>Programming</dt>
      <dd>Python, C/C++, JavaScript (Google Earth Engine)</dd>
      <dt>Software</dt>
      <dd>ArcGIS, ENVI, MATLAB, Pix4Dmapper</dd>
      <dt>Interests</dt>
      <dd>Badminton, photography</dd>
    </dl>
  </section>

</div>
