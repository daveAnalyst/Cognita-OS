# Engelbert

<!-- A banner image makes the project look instantly more professional. Use a tool like Canva to create a 1280x640 image. -->
<p align="center">
  <img src="docs/media/engelbert-banner.png" alt="Engelbert OS Banner"/>
</p>

<p align="center">
  <strong>An open-source 'thinking operating system' designed to be a Socratic partner for thought.</strong>
</p>

<p align="center">
    <!-- IMPORTANT: Update 'your-github-username' to your actual GitHub username -->
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

## The Unfinished Revolution: From AI Butler to Lab Partner

For 60 years, the reactive GUI has defined computing, casting the user as a low-level operator. The current wave of AI, while powerful, reinforces this paradigm by creating hyper-efficient "AI Butlers" for task automation.

**Engelbert is a fundamental rethinking of this relationship.**

Inspired by the vision of Douglas Engelbart, we are building an AI-native operating system that functions as a Socratic **"AI Lab Partner"** for cognitive augmentation. It's an "attention shield" designed not to capture your focus, but to amplify it—helping you think with more depth, creativity, and clarity.

## Wise: The Sovereign Scholar Edition (Our MVP)

**Wise** is the flagship application built on the Engelbert OS architecture. It is the first Integrated Thinking Environment (ITE) designed for students, researchers, and developers.

- **What it is:** A free, 100% offline-first desktop application for Windows, macOS, and Linux.
- **Cognitive Sovereignty:** Your data, models, and thoughts never leave your machine.
- **Killer Feature:** The "Cheat Sheet" generator, using a local RAG pipeline to analyze and synthesize your private documents and notes.
- **"Wow" Feature:** A "Cognitive Screenshot" and gesture-based controls, demonstrating our post-GUI vision.

<!-- A screenshot is critical. Take one of your current running app, even if it's imperfect. -->
<p align="center">
  <img src="docs/media/wise-screenshot.png" alt="Wise Application Screenshot" width="80%">
</p>

## Architecture & Tech Stack

Engelbert is an **application-level "meta" OS** that runs on top of existing operating systems.

- **The Kernel ("SageMind Orchestrator"):** A Python backend powered by FastAPI that runs as a local sidecar. Its core logic is the **DPES (Deconstruct-Plan-Execute-Synthesize)** loop.
- **The "Second Brain":** A local-first database using SQLite for structured data and LanceDB for vector storage.
- **The Frontend:** A reactive UI built with Next.js and TypeScript.
- **The Desktop Shell:** Packaged into a native desktop app using Tauri.
- **The AI:** Designed for multi-model orchestration, running local LLMs via Ollama.

## Getting Started (Development Setup)

This project uses a three-terminal setup for development to provide clear, isolated logs for each part of the system.

**Prerequisites:**
- Node.js and npm
- Python 3.9+ and pip
- Rust and Cargo
- Ollama installed and running

**1. Clone the repository:**
```bash
# IMPORTANT: Update 'your-github-username' after renaming the repo
git clone https://github.com/daveANALYST/EngelBERT.git
cd Engelbert

**Terminal 1: Launch the backend**
```bash
cd src-backend
python -m venv venv
source venv/Scripts/activate
pip install "fastapi[all]"
uvicorn main:app --reload

**Terminal 2, Launch the frontend**
```bash
cd src-frontend
npm install
npm run dev

**Terminal 3: Launch the Tauri App:**
```bash
cd src-frontend
npm run tauri dev

A native desktop window will now launch, displaying the UI from the frontend server.

## Project Structure

This is a monorepo containing the entire Engelbert system.

- `/src-frontend/`: The Next.js and Tauri frontend application.
- `/src-backend/`: The Python, FastAPI, and AI orchestration backend (the "kernel").
- `/docs/`: Project documentation, media assets, and the vision paper.

## Roadmap

- ✅ **Sprint 1: The Steel Frame.**  
  *Goal:* Achieve a working end-to-end connection where the Tauri UI can communicate with the Python backend via a local API call.
- 🔄 **Sprint 2: The Thinking Kernel.**  
  *Goal:* Integrate Ollama into the backend, allowing the UI to send a prompt and receive a response from a local LLM. Implement the first version of the "Cheat Sheet" RAG pipeline.
- **Sprint 3: The Second Brain.**  
  *Goal:* Build the document ingestion pipeline and the SQLite/LanceDB database architecture.

## Contributing

We are not actively accepting pull requests at this time as we focus on the core MVP for the Kaggle challenge, but we welcome feedback and ideas. Please open an issue to start a discussion.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## The Team

- Dave Angaya (CEO, Product/Architecture)
- Davin Dewanto (CTO, AI/Backend)
