# Portfolio Customization Guide

## 🎨 Easy Customization for Developers

This portfolio has been refactored to make it extremely easy for developers to customize both the **look** and **data** of their portfolio. No complex theme switching - just simple configuration files!

## 📁 Configuration Files

### 1. **Portfolio Data** - `src/config/portfolio.js`

Change all your personal information, content, and data here.

### 2. **Design System** - `src/config/theme.js`

Customize colors, fonts, spacing, and other design elements here.

### 3. **CSS Variables** - `src/styles/theme.css`

Direct CSS customization for quick changes.

## 🎯 How to Customize

### **Personal Information & Content**

Edit `src/config/portfolio.js`:

```javascript
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    location: "Your Location",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },

  // Hero Section
  hero: {
    greeting: "Hi, I am",
    name: "Your Name",
    title: "Your Title",
    description: "Your description here...",
    ctaText: "Hire Me",
    image: "/your-image.png",
  },

  // Experience
  experience: {
    title: "Experience",
    items: [
      {
        company: "Your Company",
        position: "Your Position",
        duration: "2022 - Present",
        description: "Your role description",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      // Add more experiences...
    ],
  },

  // Projects
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Your Project",
        description: "Project description",
        image: "/project-image.jpg",
        technologies: ["React", "Node.js"],
        liveUrl: "https://project.com",
        githubUrl: "https://github.com/project",
      },
      // Add more projects...
    ],
  },
};
```

### **Design & Colors**

Edit `src/config/theme.js`:

```javascript
export const designConfig = {
  // Color Palette
  colors: {
    primary: "#f8c70c", // Main brand color
    secondary: "#4da8da", // Accent color
    background: "rgb(250, 250, 250)",
    surface: "rgba(250, 249, 246, 0.8)",
    textPrimary: "rgb(40, 40, 40)",
    textSecondary: "rgba(40, 40, 40, 0.8)",
    textLight: "rgb(250, 249, 246)",
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "'Anton', sans-serif", // Main headings
      secondary: "'Geist', sans-serif", // Subheadings
      body: "'Roboto', sans-serif", // Body text
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "46px",
      "4xl": "64px",
    },
  },

  // Spacing
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },

  // Border Radius
  borderRadius: {
    sm: "2px",
    md: "6px",
    lg: "8px",
    xl: "12px",
  },
};
```

### **Quick CSS Changes**

Edit `src/styles/theme.css` for immediate changes:

```css
:root {
  /* Colors */
  --color-primary: #f8c70c; /* Change main color */
  --color-secondary: #4da8da; /* Change accent color */
  --color-background: rgb(250, 250, 250);

  /* Fonts */
  --font-family-primary: "Anton", sans-serif;
  --font-family-secondary: "Geist", sans-serif;
  --font-family-body: "Roboto", sans-serif;

  /* Font Sizes */
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-3xl: 46px;

  /* Spacing */
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Border Radius */
  --border-radius-sm: 2px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
}
```

## 🎨 Popular Color Schemes

### **Blue Theme**

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-light: rgba(59, 130, 246, 0.8);
  --color-primary-dark: #2563eb;
  --color-secondary: #10b981;
}
```

### **Purple Theme**

```css
:root {
  --color-primary: #8b5cf6;
  --color-primary-light: rgba(139, 92, 246, 0.8);
  --color-primary-dark: #7c3aed;
  --color-secondary: #f59e0b;
}
```

### **Green Theme**

```css
:root {
  --color-primary: #10b981;
  --color-primary-light: rgba(16, 185, 129, 0.8);
  --color-primary-dark: #059669;
  --color-secondary: #3b82f6;
}
```

### **Red Theme**

```css
:root {
  --color-primary: #ef4444;
  --color-primary-light: rgba(239, 68, 68, 0.8);
  --color-primary-dark: #dc2626;
  --color-secondary: #8b5cf6;
}
```

## 🔤 Popular Font Combinations

### **Modern & Clean**

```css
:root {
  --font-family-primary: "'Inter', sans-serif";
  --font-family-secondary: "'Inter', sans-serif";
  --font-family-body: "'Inter', sans-serif";
}
```

### **Professional**

```css
:root {
  --font-family-primary: "'Poppins', sans-serif";
  --font-family-secondary: "'Inter', sans-serif";
  --font-family-body: "'Open Sans', sans-serif";
}
```

### **Creative**

```css
:root {
  --font-family-primary: "'Playfair Display', serif";
  --font-family-secondary: "'Poppins', sans-serif";
  --font-family-body: "'Inter', sans-serif";
}
```

## 📱 Responsive Design

The portfolio is fully responsive with these breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

All components automatically adapt to different screen sizes.

## 🚀 Quick Start Guide

### **1. Change Your Information**

1. Open `src/config/portfolio.js`
2. Update your name, email, social links
3. Add your experience and projects
4. Customize the hero description

### **2. Change Colors**

1. Open `src/styles/theme.css`
2. Modify the color variables
3. Save and see changes instantly

### **3. Change Fonts**

1. Add Google Fonts to `public/index.html`
2. Update font variables in `src/styles/theme.css`
3. Choose from the font combinations above

### **4. Add New Sections**

1. Create new components in `src/components/`
2. Add them to your sections
3. Use the existing design system

## 🛠️ Development Workflow

1. **Edit Data**: Modify `src/config/portfolio.js`
2. **Edit Design**: Modify `src/config/theme.js` or `src/styles/theme.css`
3. **Add Components**: Use the existing UI components
4. **Test**: Check responsive design on different devices

## 📋 What You Can Customize

### **Content**

- ✅ Personal information
- ✅ Hero section text
- ✅ Experience details
- ✅ Project information
- ✅ Skills and technologies
- ✅ Contact information
- ✅ Social media links
- ✅ Goals ticker text

### **Design**

- ✅ Color scheme
- ✅ Typography (fonts, sizes, weights)
- ✅ Spacing and layout
- ✅ Border radius
- ✅ Shadows and effects
- ✅ Transitions and animations

### **Structure**

- ✅ Add new sections
- ✅ Reorder existing sections
- ✅ Customize component variants
- ✅ Add new UI components

This simplified approach makes it incredibly easy to customize your portfolio without any complex theme switching or unnecessary complexity!
