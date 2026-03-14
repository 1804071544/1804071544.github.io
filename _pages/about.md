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
      Replace this introduction with a concise overview of your research area, the problems you study, and the methods you use.
      A strong first version is usually 3-4 sentences covering your current appointment, core topics, and recent work.
    </p>
  </div>

  <div class="academic-home__grid">
    <section class="academic-home__section">
      <h2>Research Interests</h2>
      <ul class="academic-home__list">
        <li>[Research Area 1] with a one-line description of the central question.</li>
        <li>[Research Area 2] with a short note on methods, datasets, or systems.</li>
        <li>[Research Area 3] with a short note on application domain or impact.</li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Education</h2>
      <ul class="academic-home__timeline">
        <li>
          <strong>Ph.D., [Discipline]</strong><br>
          [University], [Year or Expected Year]
        </li>
        <li>
          <strong>M.S., [Discipline]</strong><br>
          [University], [Year]
        </li>
        <li>
          <strong>B.S., [Discipline]</strong><br>
          [University], [Year]
        </li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Appointments</h2>
      <ul class="academic-home__timeline">
        <li>
          <strong>[Current Position]</strong><br>
          [Department], [Institution], [Start Year]-Present
        </li>
        <li>
          <strong>[Previous Position]</strong><br>
          [Institution], [Years]
        </li>
      </ul>
    </section>

    <section class="academic-home__section">
      <h2>Selected Publications</h2>
      <p class="academic-home__note">
        Update the records in <code>_publications/</code> to replace these sample entries with your own papers.
      </p>
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
