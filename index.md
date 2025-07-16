---
layout: default
title: EngelBERT — The Thinking Operating System
---

<!-- I will keep your CSS and Dark Mode script as it's functional and well-done. -->
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 40px auto; padding: 0 20px; transition: background-color 0.3s, color 0.3s; }
  .dark-mode { background-color: #121212; color: #EAEAEA; }
  .dark-mode a { color: #8ab4f8; }
  .dark-mode h1, .dark-mode h2, .dark-mode h3 { color: #fff; border-bottom-color: #444; }
  h1, h2, h3 { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 40px;}
  pre { background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .dark-mode pre { background-color: #2b2b2b; }
  code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
  img { max-width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .dark-mode img { box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
  .hero-section { text-align: center; margin-bottom: 60px; border-bottom: none; }
  .hero-section h1 { border-bottom: none; margin-bottom: 0; }
  .hero-section p { font-size: 1.2em; color: #666; }
  .dark-mode .hero-section p { color: #999; }
  .abstract { font-style: italic; background-color: #f9f9f9; border-left: 4px solid #ccc; padding: 20px; margin: 30px 0; }
  .dark-mode .abstract { background-color: #252525; border-left-color: #555; }
  .toggle-switch { position: fixed; top: 20px; right: 20px; cursor: pointer; font-size: 1.5em; z-index: 100; }
  .cta-section { text-align: center; margin-top: 60px; margin-bottom: 40px; padding: 40px; background-color: #f9f9f9; border-radius: 8px;}
  .dark-mode .cta-section { background-color: #252525; }
  .cta-section a { background-color: #007BFF; color: white !important; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 10px; }
  .dark-mode .cta-section a { background-color: #8ab4f8; color: #121212 !important; }
  .team-section { display: flex; gap: 40px; margin-top: 30px; }
  .team-member { flex: 1; }
</style>

<div class="toggle-switch" onclick="toggleDarkMode()">🌓</div>
<script>
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
</script>

<!-- HERO SECTION: Start with the Vision & the Product -->
<div class="hero-section">
  <img src="media/wise-banner.png" alt="Wise Application Banner">
  <h1>EngelBERT</h1>
  <p>The Thinking Operating System</p>
</div>

The dominant paradigm of human-computer interaction—the reactive GUI—is a bottleneck for deep, creative thought. We propose **EngelBERT**, an architectural vision for a 'thinking operating system' that inverts this model. Instead of an 'AI Butler' for task automation, Engelbert functions as a Socratic **'AI Lab Partner'** for cognitive augmentation.

This document outlines our vision, the core architecture, and the roadmap for building this new generation of sovereign, proactive AI systems.

---

## A Day in the Life with Wise

To understand our vision, consider Sabina, a developer using our flagship application, **Wise**. She has been documenting her project for weeks, storing code snippets and design notes in her local **"Second Brain."** After pushing a new feature, she gets a bug report. She asks Wise: *"Review my recent commits related to the user authentication flow and my original design notes from last month."*

Later, while she is debugging, the **Insight Engine**, running its passive 'dream cycle', surfaces a non-intrusive suggestion: *"I noticed the logic in your `handleAuthRedirect` function conflicts with a constraint you mentioned three weeks ago: 'Ensure all redirects are server-side validated.' This might be the source of the bug."*

Intrigued, Sabina activates the **"Agora" Cognitive Lens** to debate the architectural trade-offs of the fix, then switches to the **"Muse" Lens** to brainstorm a more elegant solution. This is not just a faster workflow; it is a deeper mode of thought, augmented by a true cognitive partner.

![Wise Sovereign Edition Mockup](media/wise soveraign scholar edition.png)
*Figure 1: A conceptual mockup of the "Wise: Sovereign Scholar Edition" UI.*

## The Engelbert Architecture

Our architecture is composed of three concentric layers: a central Cognitive Core, an Augmented Workspace (Wise), and a future Agent Economy.

![The Engelbert Ecosystem](media/WiseEcosystem.png)
*Figure 2: The Engelbert Ecosystem, featuring the Kernel, Workspace, and a planned Agent Economy.*

#### Key Innovations

*   **The DPES Loop:** A Deconstruct-Plan-Execute-Synthesize loop that powers our intent-driven kernel, complete with a "Critic Agent" for self-correction.
*   **The Insight Engine:** A computational "dream/drift cycle" that passively analyzes a user's local knowledge base to surface non-obvious connections.
*   **Cognitive Lenses:** User-directed reasoning styles (Scholar, Muse, Reflective, Agora) that adapt the AI's entire mode of interaction.

## The Journey So Far

Our mission began with a prototype at a Google AI Hackathon and has evolved into a full-fledged vision for a new computing paradigm. We are currently in active development for the **Google Gemma 3n Impact Challenge**, building the "Wise: Sovereign Scholar Edition" as a proof-of-concept for the Engelbert architecture.

*You can read the full academic vision paper [here](./path/to/your/paper.pdf) (link to the PDF) or view the code on [GitHub](https://github.com/daveAnalyst/EngelBERT).*

---

<!-- THE NEW, FOCUSED CALL-TO-ACTION SECTION -->
<div class="cta-section">
  <h2>Join the Waitlist</h2>
  <p>Be among the first to experience a new way of thinking. Join the waitlist for early access to the "Wise" experimental app.</p>
  <!-- This is where you would embed your Tally.so form. For now, a link is a great placeholder. -->
  <a href="YOUR_TALLY_SO_FORM_LINK" target="_blank">Join the Wise Waitlist</a>
</div>

---

## The Team

<div class="team-section">
  <div class="team-member">
    <h3>David Angaya</h3>
    <p>My background is in Economics, which taught me to think in terms of systems and human behavior. I fell in love with AI as the ultimate tool to shape these systems. My passion is architecting AI products that don't just solve technical problems, but augment the human experience.</p>
  </div>
  <div class="team-member">
    <h3>Davin Dewanto</h3>
    <p>I'm the engineer who loves bringing ambitious visions to life. With a background in CS and a focus on backend architecture and AI implementation, my passion is building the robust, scalable infrastructure that makes magical user experiences possible. I build the "how" that powers Dave's "what if."</p>
  </div>
</div>

<p align="center" style="margin-top: 50px; font-size: 0.9em; color: #999;">
  <a href="mailto:davidomungala3@gmail.com">Contact Us</a> | <a href="https://github.com/daveAnalyst/EngelBERT">GitHub Repository</a> | © 2025 EngelBERT Project
</p>