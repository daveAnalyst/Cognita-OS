---
layout: default
title: EngelBERT — The Thinking Operating System
---

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
    transition: background-color 0.3s, color 0.3s;
  }
  .dark-mode {
    background-color: #121212;
    color: #EAEAEA;
  }
  .dark-mode a { color: #8ab4f8; }
  .dark-mode h1, .dark-mode h2, .dark-mode h3 {
    color: #fff;
    border-bottom-color: #444;
  }
  h1, h2, h3 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-top: 40px;
  }
  h3 { font-size: 1.4em; }
  p { font-size: 1.1em; }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 30px auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .dark-mode img {
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  .hero-section {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 60px;
    border-bottom: none;
  }
  .hero-section h1 {
    border-bottom: none;
    margin-bottom: 10px;
    font-size: 3em;
  }
  .hero-section .tagline {
    font-size: 1.3em;
    color: #666;
  }
  .dark-mode .hero-section .tagline { color: #999; }
  .toggle-switch {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 1.5em;
    z-index: 100;
  }
  .problem-statement {
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
  }
  .dark-mode .problem-statement {
    background-color: #2d2a1f;
    border-color: #574d29;
  }
  .demo-section {
    background-color: #e8f5e8;
    padding: 30px;
    border-radius: 8px;
    margin: 30px 0;
  }
  .dark-mode .demo-section {
    background-color: #1a2e1a;
  }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  .feature-card {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #007BFF;
  }
  .dark-mode .feature-card {
    background-color: #252525;
    border-left-color: #8ab4f8;
  }
  .status-badge {
    display: inline-block;
    background-color: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    margin-left: 10px;
    vertical-align: middle;
  }
  .timeline { margin: 30px 0; }
  .timeline-item {
    margin-bottom: 20px;
    padding-left: 20px;
    border-left: 2px solid #007BFF;
  }
  .timeline-item h4 {
    margin: 0;
    color: #007BFF;
  }
  .dark-mode .timeline-item h4 { color: #8ab4f8; }
  .cta-section {
    text-align: center;
    margin: 60px 0;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  .dark-mode .cta-section {
    background-color: #252525;
  }
  .cta-section a {
    background-color: #007BFF;
    color: white !important;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin: 10px;
    display: inline-block;
  }
  .dark-mode .cta-section a {
    background-color: #8ab4f8;
    color: #121212 !important;
  }
  .team-section {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    gap: 40px;
    margin-top: 30px;
  }
  .team-member { flex: 1; min-width: 280px; }
  .footer {
    text-align: center;
    margin-top: 60px;
    padding-top: 20px;
    font-size: 0.9em;
    color: #999;
    border-top: 1px solid #eee;
  }
  .dark-mode .footer { border-top-color: #444; }
</style>

<div class="toggle-switch" onclick="toggleDarkMode()">🌓</div>
<script>
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  // Load dark mode by default if user prefers it or has set it before
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
  }
</script>

<!-- HERO -->
<div class="hero-section">
  <img src="media/wise-banner.png" alt="Wise Application Banner">
  <h1>Engelbert</h1>
  <p class="tagline">The Thinking Operating System</p>
</div>

<!-- PROBLEM -->
<div class="problem-statement">
  <h3>🚫 The Problem: The AI Butler is a Dead End</h3>
  <p>Today's AI systems are hyper-efficient <strong>"AI Butlers."</strong> They automate tasks and make us faster, but they don't make us <em>smarter</em>. The fundamental relationship hasn't changed: we are still operators commanding a reactive machine. This is a bottleneck for deep, creative thought.</p>
</div>

<!-- VISION -->
<h2>Our Vision: The AI Lab Partner</h2>
<p>We believe the true revolution is an **"AI Lab Partner"**—a Socratic system designed for cognitive augmentation. Engelbert is our architectural vision for this new paradigm. It's an "attention shield" that doesn't just complete tasks, but uses them as raw material for a deeper cognitive partnership.</p>

<!-- USER STORY -->
<div class="demo-section">
  <h3>Meet Wise: A Day in the Life</h3>
  <p>To understand Engelbert, consider Sabina, a developer using our flagship application, <strong>Wise</strong>. She's been documenting a project for weeks in her local **"Second Brain."** After a bug report, she asks Wise: <em>"Review my recent commits on the auth flow and my original design notes from last month."</em></p>
  <p>Later, while she's debugging, the **Insight Engine** surfaces a non-intrusive insight: <em>"I noticed your <code>handleAuthRedirect</code> function conflicts with a design note from three weeks ago: 'Ensure all redirects are server-side validated.' This might be the source of the bug."</em></p>
  <p>Intrigued, Sabina activates the **"Agora" Cognitive Lens** to debate the fix, then switches to the **"Muse" Lens** to brainstorm a more elegant solution. <strong>This isn't a faster workflow—it's a deeper mode of thought.</strong></p>
</div>

<img src="media/wise soveraign scholar edition.png" alt="Wise Sovereign Edition Archictecture" style="border: 1px solid #444; margin-top: 40px;">
<p align="center" style="font-style: italic; color: #888;">Figure 1: The "Wise: Sovereign Scholar Edition" interface—your personal thinking environment.</p>

<!-- CORE INNOVATIONS -->
<h2>Core Innovations</h2>
<div class="feature-grid">
  <div class="feature-card">
    <h4>🔄 The DPES Loop</h4>
    <p>A Deconstruct-Plan-Execute-Synthesize loop powers our kernel, complete with a "Critic Agent" for self-correction.</p>
  </div>
  <div class="feature-card">
    <h4>💡 The Insight Engine</h4>
    <p>A computational "dream cycle" that passively analyzes your local knowledge to surface non-obvious connections.</p>
  </div>
  <div class="feature-card">
    <h4>🎭 Cognitive Lenses</h4>
    <p>User-directed reasoning styles (Scholar, Muse, Reflective, Agora) that adapt the AI's entire mode of interaction.</p>
  </div>
  <div class="feature-card">
    <h4>🏠 Cognitive Sovereignty</h4>
    <p>Your thoughts, data, and models stay on your device. Local-first by default, with an optional "Cloud Bridge" for external tools.</p>
  </div>
</div>

<!-- ROADMAP -->
<h2>Development Roadmap <span class="status-badge">Active</span></h2>
<div class="timeline">
  <div class="timeline-item">
    <h4>Phase 1: Proof of Concept (Current)</h4>
    <p>Building "Wise: Sovereign Scholar Edition" for the Google Gemma 3n Impact Challenge. Focusing on local-first execution (Ollama) and the core Scholar/Muse lenses.</p>
  </div>
  <div class="timeline-item">
    <h4>Phase 2: Validation & Open-Source (Q4 2025)</h4>
    <p>Formal user studies measuring cognitive augmentation. First open-source release of the core orchestration framework.</p>
  </div>
  <div class="timeline-item">
    <h4>Phase 3: Platform Beta (2026)</h4>
    <p>All four Cognitive Lenses, an initial agent SDK, and advanced multi-timescale memory systems.</p>
  </div>
</div>

<!-- CTA (CALL TO ACTION) -->
<div class="cta-section">
  <h2>Be Among the First to Think Differently</h2>
  <p>Join the waitlist for early access to the "Wise" experimental app. Experience what it's like to have a true cognitive partner.</p>
  <a href="https://tally.so/r/3q8PBG" target="_blank">Join the Wise Waitlist</a>
  <a href="https://github.com/daveAnalyst/EngelBERT" target="_blank">View on GitHub</a>
</div>

<!-- TEAM -->
<h2>The Team</h2>
<div class="team-section">
  <div class="team-member">
    <h3>David Angaya</h3>
    <p>My background in Economics taught me to think in terms of systems and human behavior. I fell in love with AI as the ultimate tool to shape these systems. My passion is architecting AI products that don't just solve technical problems, but augment the human experience.</p>
  </div>
  <div class="team-member">
    <h3>Davin Dewanto</h3>
    <p>I'm the engineer who loves bringing ambitious visions to life. With a background in CS and a focus on backend architecture and AI implementation, my passion is building the robust, scalable infrastructure that makes magical user experiences possible.</p>
  </div>
</div>

<!-- FOOTER -->
<div class="footer">
  <p>This project is grounded in the research of Engelbart, Licklider, and Kay. <a href="https://doi.org/10.5281/zenodo.16020726">Read the full academic paper</a>.</p>
  <p>© 2025 The Engelbert Project | <a href="mailto:davidomungala3@gmail.com">Contact Us</a> | <a href="https://twitter.com/Omungala_dave">Follow Updates</a></p>
</div>