# Der Rechtsruck in Zahlen

A scrollytelling web application exploring 100 years of political shifts in Germany, from the Weimar Republic to the present day.

## 🎯 Project Overview

This data-driven narrative uses interactive visualizations to tell the story of political transformation in Germany. Built with modern web technologies to create an immersive, educational experience similar to pudding.cool.

## 🛠 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling with custom era themes
- **D3.js** - Interactive data visualizations
- **Framer Motion** - Smooth animations and transitions

## 📊 Features

### Homepage
- Fullscreen hero section with film-grain effect
- Smooth fade-in animations
- Prominent call-to-action button

### Chapter 1 - Weimar Republic (1919-1933)
- Two-column responsive layout
- Animated D3.js line chart showing real NSDAP election data:
  - 1928: 2.6%
  - 1930: 18.3%
  - July 1932: 37.4%
  - November 1932: 33.1%
  - March 1933: 43.9%
- Scroll-triggered animations
- Sepia-toned visual styling
- Proper source citations

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
└── components/
    ├── HeroSection.tsx      # Homepage hero section
    ├── WeimarChapter.tsx    # Weimar Republic chapter
    └── NSDAPChart.tsx       # D3.js election data chart
```

## 🎨 Design System

### Visual Themes
- **Homepage**: Grayscale with film-grain effect
- **Weimar Era**: Sepia tones and vintage styling
- **Transitions**: Smooth fades between eras

### Typography
- Headlines: Georgia serif font
- Body text: Inter sans-serif font
- Responsive sizing for mobile and desktop

## 📈 Data Sources

All historical data is sourced from official records:
- **Election Results**: Federal Returning Officer (Bundeswahlleiter)
- **Time Period**: Reichstag elections 1928-1933

## 🔮 Future Chapters

The codebase is structured to easily add additional chapters covering:
- Nazi era (1933-1945)
- Post-war reconstruction
- Cold War division
- Reunification
- Modern political landscape

## 🚀 Deployment

Deploy easily on Vercel:

```bash
npm run build
```

Or use the Vercel CLI for automatic deployment.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
