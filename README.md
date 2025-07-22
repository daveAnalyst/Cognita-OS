# Engelbert OS

<p align="center">
  <img src="docs/media/engelbert-banner.png" alt="Engelbert OS Banner"/>
</p>

<p align="center">
  <strong>A new language for interacting with ideas.</strong>
</p>

<p align="center">
    <a href="https://github.com/daveAnalyst/EngelBERT/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
    </a>
    <a href="https://www.kaggle.com/competitions/gemma-3n-impact-challenge">
        <img src="https://img.shields.io/badge/Kaggle-Gemma%203n%20Challenge-20BEFF.svg" alt="Kaggle Challenge">
    </a>
    <a href="https://github.com/daveAnalyst/EngelBERT/actions">
        <img src="https://img.shields.io/badge/Status-In%20Development-orange.svg" alt="Status: In Development">
    </a>
</p>

---

### 🚫 The Problem: The AI Butler is a Dead End
Today’s AI systems are hyper-efficient **“AI Butlers.”** They make us faster, but not smarter. The paradigm remains: human commands, machine obeys. This is a bottleneck for deep thought.

### 🧪 Our Vision: The AI Lab Partner
We are building Engelbert, an **AI Lab Partner**—a Socratic system for cognitive augmentation. It’s an *attention shield* that turns your tasks into raw material for deeper, proactive insight.

---

## Meet **Wise**: A Day in the Life (Student Use Case)

The flagship application built on Engelbert is **Wise**. Here’s how it helps a student named Alex study for an exam:

| Step | What happens |
|---|---|
| 1. **Ingest** | Alex drags a folder containing 10 lecture PDFs and his messy class notes into his local **"Second Brain"** in Wise. |
| 2. **Augment** | He activates the **Scholar Lens** 🎓 and asks: *"Generate a one-page cheat sheet on the causes of the French Revolution."* Wise uses its local RAG pipeline to create a structured summary, complete with citations to his own documents. |
| 3. **Insight** | The **Insight Engine** then surfaces a proactive connection: *"Your notes on 'The Enlightenment' and your textbook's chapter on 'American Revolutionary Ideas' share strong thematic overlaps. Would you like to explore how they directly influenced the events in France?"* |

<p align="center">
  <img src="docs/media/wise-screenshot.png" alt="Wise Sovereign Edition Mockup" width="80%">
</p>

---

## Core Innovations

| Feature | Description |
|---|---|
| **DPES Loop** | Deconstruct-Plan-Execute-Synthesize with a built-in *Critic Agent* for self-correction. |
| **Insight Engine** | Passively mines your local knowledge graph for non-obvious connections. |
| **Cognitive Lenses** | On-demand reasoning styles (Scholar, Muse, Reflective, Agora) for any task. |
| **Cognitive Sovereignty** | 100% local-first. Your data, models, and thoughts never leave your device. |

---

## Getting Started (Development Setup)

This project uses a three-terminal setup for development.

**Prerequisites:** Node.js, Python 3.9+, Rust, and Ollama.

**1. Clone the repository:**
```bash
git clone https://github.com/daveAnalyst/Engelbert-OS.git
cd Engelbert-OS

**2. Terminal 1: Launch the Backend**

```bash
cd src-backend
python -m venv venv
# On Windows (Git Bash): source venv/Scripts/activate
# On macOS/Linux: source venv/bin/activate
pip install "fastapi[all]"
uvicorn main:app --reload
```

**3. Terminal 2: Launch the Frontend**

```bash
cd src-frontend
npm install
npm run dev
```

**4. Terminal 3: Launch the Tauri App**

```bash
cd src-frontend
npm run tauri dev
```

---

## Roadmap

- ✅ **Sprint 1: The Steel Frame**  
  *Goal:* Working end-to-end UI <-> Backend connection.

- 🔄 **Sprint 2: The Thinking Kernel**  
  *Goal:* Integrate Ollama; enable first prompt-to-response loop.

- **Sprint 3: The Second Brain**  
  *Goal:* Build document ingestion and RAG pipeline.

---

## The Team

This project is being built with passion by:

- **David Angaya** (CEO, Product/Architecture)  
  *My background in Economics taught me to think in terms of systems and human behavior. I fell in love with AI as the ultimate tool to shape these systems and augment the human experience.*

- **Davin Dewanto** (CTO, AI/Backend)  
  *I'm an engineer who loves bringing ambitious visions to life. With a background in CS and a focus on backend architecture, my passion is building the robust infrastructure that makes magical user experiences possible.*

---

## Get Involved & Read the Vision

|  |  |
|---|---|
| 🚀 **Early Access** | [Join the Wise Waitlist](https://tally.so/r/3q8PBG) |
| 📖 **Vision Page** | [Read the Full Story](https://your-live-vercel-url.app) |
| 📄 **Academic Paper** | [View on Zenodo (DOI)](https://doi.org/10.5281/zenodo.16020726) |

---

<p align="center">
<a href="mailto:davidomungala3@gmail.com">Contact Us</a> · <a href="https://twitter.com/Omungala_dave">Follow Updates</a> · <a href="LICENSE">MIT License</a>
</p>
```