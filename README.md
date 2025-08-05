# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with React, GSAP animations, and horizontal scrolling effects. Features a clean design, smooth animations, and easy customization.

## ✨ Features

### 🎨 **Design & Animations**

- **GSAP Animations**: Smooth scroll-triggered animations
- **Horizontal Scroll**: Interactive horizontal scrolling sections
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Responsive Design**: Works perfectly on all devices
- **Smooth Transitions**: Elegant hover effects and transitions

### 📱 **Sections**

- **Hero Section**: Eye-catching introduction with animated elements
- **Work Experience**: 2 detailed company experiences with achievements
- **Education**: BTech in Computer Science with GPA and achievements
- **Certifications**: 4 Udemy certifications with skills learned
- **Projects**: 4 featured projects with live demos and GitHub links
- **Skills**: Comprehensive skills and technologies showcase

### 🛠️ **Technical Features**

- **React 19**: Latest React with modern hooks
- **GSAP**: Professional-grade animations
- **CSS Custom Properties**: Easy theme customization
- **BEM Methodology**: Clean, maintainable CSS
- **Component Architecture**: Reusable UI components

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### **Easy Data Changes**

Edit `src/config/portfolio.js` to update all your information:

```javascript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    email: "your.email@example.com",
    // ... more personal info
  },
  experience: {
    items: [
      {
        company: "Your Company",
        position: "Your Position",
        // ... more experience details
      },
    ],
  },
  // ... all other sections
};
```

### **Easy Design Changes**

Edit `src/styles/theme.css` to customize colors and fonts:

```css
:root {
  --color-primary: #f8c70c; /* Change main color */
  --color-secondary: #4da8da; /* Change accent color */
  --font-family-primary: "Anton", sans-serif; /* Change fonts */
  --font-size-3xl: 46px; /* Change font sizes */
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button/
│   │   └── Card/
│   ├── layout/               # Layout components
│   └── [other components]/
├── sections/                 # Page sections
│   ├── HeroSection/
│   ├── ExperienceSection/
│   ├── EducationSection/
│   ├── CertificationsSection/
│   ├── ProjectsSection/
│   └── StackSection/
├── config/                   # Configuration files
│   ├── portfolio.js         # All portfolio data
│   └── theme.js             # Design configuration
├── styles/                   # Global styles
│   ├── theme.css            # CSS variables
│   └── global.css           # Global styles
└── contexts/                 # React contexts
```

## 🎯 Key Sections

### **Work Experience**

- 2 detailed company experiences
- Key achievements and technologies
- Animated cards with hover effects

### **Education**

- BTech in Computer Science
- GPA, relevant courses, and achievements
- Clean, professional layout

### **Certifications**

- 4 Udemy certifications
- Skills learned from each course
- Horizontal scroll with GSAP animations

### **Projects**

- 4 featured projects
- Live demos and GitHub links
- Interactive image overlays
- Technology tags

## 🎨 Animation Features

### **GSAP Animations**

- Scroll-triggered animations
- Staggered card reveals
- Smooth hover effects
- Horizontal scroll sections

### **Interactive Elements**

- Hover animations on cards
- Image scale effects
- Button hover states
- Smooth transitions

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

All sections adapt beautifully to different screen sizes.

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

### **Deploy to Netlify**

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### **Deploy to Vercel**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🛠️ Development

### **Available Scripts**

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run eject` - Eject from Create React App

### **Adding New Sections**

1. Create new component in `src/sections/`
2. Add GSAP animations
3. Import in `src/App.js`
4. Add data to `src/config/portfolio.js`

## 🎨 Customization Guide

### **Change Colors**

Edit `src/styles/theme.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

### **Change Fonts**

1. Add Google Fonts to `public/index.html`
2. Update variables in `src/styles/theme.css`

### **Add New Projects**

Edit `src/config/portfolio.js`:

```javascript
projects: {
  items: [
    {
      title: "Your Project",
      description: "Project description",
      image: "/your-image.jpg",
      technologies: ["React", "Node.js"],
      liveUrl: "https://your-project.com",
      githubUrl: "https://github.com/your-project",
    },
  ];
}
```

## 📋 Dependencies

### **Core Dependencies**

- `react`: ^19.1.0
- `react-dom`: ^19.1.0
- `gsap`: ^3.12.5
- `lenis`: ^1.2.3

### **Development Dependencies**

- `sass`: ^1.89.2
- `gh-pages`: ^6.3.0

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** for amazing animations
- **React** for the powerful framework
- **CSS Custom Properties** for easy theming
- **BEM Methodology** for clean CSS

## 📞 Contact

- **Email**: khalifasafvan@yahoo.com
- **GitHub**: [Your GitHub]
- **LinkedIn**: [Your LinkedIn]

---

⭐ **Star this repository if you found it helpful!**
