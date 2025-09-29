# LeetJump Landing Page

A modern, responsive landing page for the LeetJump browser extension - the fastest way to navigate LeetCode problems with keyboard shortcuts.

## ✨ Features

### 🎨 Design System

- **Consistent Visual Identity**: Matches the LeetJump extension's popup interface
- **JetBrains Mono Font**: Professional monospace typography
- **Custom Color Palette**: Carefully crafted colors with semantic meaning
- **Bento Grid Layout**: Modern, visually appealing component arrangement
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### 🔧 Technical Features

- **Next.js 15** with Turbopack for fast development
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **Browser Detection**: Shows appropriate install button (Chrome/Firefox)
- **Interactive Demo**: Animated extension popup simulation
- **SEO Optimized**: Comprehensive meta tags and structured data

### 📱 Pages

- **Homepage**: Feature showcase with bento grid layout
- **Release Notes**: Scalable changelog with GitHub integration support
- **Privacy Policy**: Comprehensive privacy documentation

### 🌟 Key Highlights

- **No Tracking**: Privacy-first approach with no analytics
- **Open Source**: Transparent development process
- **Support Integration**: Clever positioning of sponsor/support buttons
- **Cross-Browser**: Chrome, Firefox, and Edge compatibility
- **Keyboard-First**: Emphasizes developer workflow efficiency

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   bun install
   ```

2. **Start development server**:

   ```bash
   bun run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with design tokens
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage with bento grid
│   ├── release-notes/       # Release notes page
│   │   └── page.tsx
│   └── privacy/             # Privacy policy page
│       └── page.tsx
├── components/
│   ├── BrowserDetection.tsx # Smart browser detection
│   └── InteractiveDemo.tsx  # Animated extension demo
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--background: oklch(0.9761 0.0041 91.4461); /* Light warm white */
--foreground: oklch(22.645% 0.00003 271.152); /* Very dark gray */
--primary: oklch(0.285 0 0); /* Pure black */

/* Feature Colors */
--chart-2: oklch(0.6056 0.2189 292.7172); /* Purple (Premium/PRO) */
--chart-3: oklch(0.7227 0.192 149.5793); /* Green (Easy difficulty) */
--chart-4: oklch(0.7952 0.1617 86.0468); /* Orange (Medium difficulty) */
--destructive: oklch(0.6368 0.2078 25.3313); /* Red (Hard difficulty) */
```

### Typography

- **Font**: JetBrains Mono (matches extension)
- **Letter Spacing**: -0.05em for modern look
- **Weights**: 400, 500, 600, 700

### Layout Principles

- **Border Radius**: 0rem (sharp corners throughout)
- **Spacing**: Consistent 4px grid system
- **Transitions**: 0.15s ease for interactions

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

### Features to Implement

- [ ] GitHub API integration for real release notes
- [ ] Release notes auto-fetch with caching
- [ ] Dark mode toggle (currently follows system)
- [ ] Analytics (privacy-friendly)
- [ ] Performance optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ by developers, for developers**
