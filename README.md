# Awakening — Solo Leveling Tribute

A three-act, scroll-driven interactive experience built with React and Vite, inspired by the Solo Leveling universe.  
**Created by: Abdullah Riaz**

---

## 🚀 Getting Started

To run this project locally, follow these steps:

```bash
npm install
npm run dev      # Starts the local development server
npm run build    # Creates a production-ready build in the dist/ folder
🎬 The Three Acts
#
Section
Interaction & Features
01
THE AWAKENING
Dark stage, pinned scrolling. Scrubbing through an 80-frame sequence: eyes closed → open → the blue monarch glow. The title's glow and edge meter track the scroll progress.
02
SHADOW MONARCH
Pointer X maps onto the dragon's tracked position. Sweeping left-to-right drags it across the screen. Features falling glyph rain and a fluid WebGL SplashCursor that mounts only while this section is on screen.
03
ARISE (Two Faces)
Two stacked portraits. A soft trailing lens follows the pointer, revealing the awakened image through the human one. It drifts on its own until the pointer arrives.
Note: A storm effect runs over all three sections. It is automatically disabled if the user has prefers-reduced-motion enabled for accessibility.
🌐 Deployment
This project is optimized for modern hosting platforms like Vercel or Netlify.
Run npm run build to generate the dist/ folder.
Connect your GitHub repository to Vercel/Netlify, or simply drag and drop the dist/ folder into Netlify Drop.
The vite.config.js is already configured to handle base paths correctly for deep linking.
🖼️ Frame Optimization
To ensure smooth performance, the animations use optimized assets:
Frames are rendered as individual WebP files at a native 1280x720 resolution (not a massive sprite sheet, which causes browser decoding issues).
A half-size set is included for small screens and low-DPI displays.
Total size: Full ~7.8 MB, Half ~3.7 MB. The runtime intelligently picks the right size.
The background is keyed out so the section remains dark without visual artifacts.
📂 Project Structure
text
123456789
⚙️ Technical Notes
Every canvas runs on a single requestAnimationFrame (rAF) loop and pauses on visibilitychange to save battery.
The pointer maps onto the dragon's position rather than the frame index to prevent stuttering, as the kept frames are unevenly spaced.
On narrow viewports (mobile), the 16:9 frame fits to width, and the typography adapts to compose around it as a band.
⚠️ Disclaimer: This is a fan-made tribute project for educational and portfolio purposes. All original artwork and concepts belong to their respective rights holders.
Built with ❤️ by Abdullah Riaz