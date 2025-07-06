# IntentMate Inc. - Official Landing Page

This repository contains the source code for the official landing page for IntentMate and the "Wise" application. The site is built with Next.js, Tailwind CSS, and Framer Motion.

## Project Vision & Goal

The goal of this landing page is to tell a compelling story about our mission: building a "Lab Partner, not a Butler." It should feel sleek, professional, and futuristic, aligning with our brand and our vision paper. It serves as the primary gateway for users and developers to join our waitlist.

## Current Status

The project is approximately 50% complete. The following sections have been built and styled:
- `HeroSection.tsx`
- `ProductSection.tsx`
- `LensSection.tsx`

The foundational setup (Next.js, Tailwind, TypeScript, Framer Motion) is complete and all major configuration issues have been resolved.

## Getting Started

To run this project locally, you will need Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/intentmate-landing-page.git
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd intentmate-landing-page
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000`.

## Tasks to be Completed

The primary goal is to finish building the remaining sections as per the project blueprint.

**1. Build the `DeepDiveSection`:**
- **Goal:** Create a "scrollytelling" section to showcase our MVP architecture.
- **Visuals:** A two-column layout where the `mvp-architecture.svg` (located in `/public`) is "sticky" on the right while text scrolls on the left.
- **Animation:** As the user scrolls past each text block, the corresponding part of the SVG should "light up" (e.g., by animating its opacity).
- **Note:** We have attempted this, but it was causing layout issues. The current component (`DeepDiveSection.tsx`) has a simplified, static layout. The goal is to implement the full, animated scrollytelling effect.

**2. Build the `VisionSection`:**
- **Goal:** To reveal the larger Cognita OS ecosystem.
- **Visuals:** This section should feature the `ecosystem-architecture.svg` diagram.
- **Animation (Stretch Goal):** A "zoom-out" or "reveal" animation that transitions from the MVP diagram to the full ecosystem diagram would be incredible, but a clean, static presentation is also acceptable.

**3. Build the `InvitationSection`:**
- **Goal:** The final call to action.
- **Visuals:** A two-card layout.
- **Functionality:**
    - The "Users" card needs to embed a form from our Tally.so account.
    - The "Developers" card needs to link to a separate Tally.so form URL.
    *(You will need to provide the Tally.so links to the developer).*

**4. Build the `Footer`:**
- **Goal:** A simple, professional footer.
- **Content:** Should include copyright, social media links, and a link to our ArXiv paper.

## Important Assets

- **SVG Diagrams:** Located in the `/public` folder (`mvp-architecture.svg` and `ecosystem-architecture.svg`). These are essential for the `DeepDiveSection` and `VisionSection`.
- **Design System:** The core aesthetic is defined in `app/globals.css`. It includes a sci-fi color palette, fonts, and custom utility classes.
- **Component Structure:** All page sections should be built as separate components inside the `/app/components/` folder and assembled in `app/page.tsx`.

