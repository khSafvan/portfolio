// Design Configuration
// Modify these values to easily customize the look and feel of your portfolio

export const designConfig = {
  // Color Palette - Change these to customize your color scheme
  colors: {
    // Primary brand color (main accent color)
    primary: "#f8c70c",
    primaryLight: "rgba(248, 199, 12, 0.8)",
    primaryDark: "#e6b800",

    // Secondary accent color
    secondary: "#4da8da",
    secondaryLight: "rgba(77, 168, 218, 0.8)",
    secondaryDark: "#3a8bc7",

    // Background colors
    background: "rgb(250, 250, 250)",
    surface: "rgba(250, 249, 246, 0.8)",

    // Text colors
    textPrimary: "rgb(40, 40, 40)",
    textSecondary: "rgba(40, 40, 40, 0.8)",
    textLight: "rgb(250, 249, 246)",

    // Border colors
    border: "rgba(248, 199, 12, 0.8)",
    borderSecondary: "rgba(77, 168, 218, 0.8)",
  },

  // Typography - Change fonts and sizes here
  typography: {
    // Font families
    fontFamily: {
      primary: "'Anton', sans-serif", // Main headings
      secondary: "'Geist', sans-serif", // Subheadings
      body: "'Roboto', sans-serif", // Body text
    },

    // Font sizes
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

    // Font weights
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Line heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing - Adjust spacing throughout the site
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },

  // Border Radius - Change for rounded corners
  borderRadius: {
    sm: "2px",
    md: "6px",
    lg: "8px",
    xl: "12px",
  },

  // Shadows - Customize shadow effects
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    drop: "drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.35))",
    dropLight: "drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.175))",
  },

  // Transitions - Animation timing
  transitions: {
    fast: "0.1s ease-out",
    normal: "0.2s ease-out",
    slow: "0.4s ease-out",
    slower: "0.6s ease-out",
  },

  // Layout
  layout: {
    containerMaxWidth: "1200px",
    sectionPadding: "48px",
  },

  // Effects
  effects: {
    backdropBlur: "blur(0.75px)",
  },
};

// Helper function to generate CSS custom properties
export const generateCSSVariables = () => {
  const colors = designConfig.colors;
  const typography = designConfig.typography;
  const spacing = designConfig.spacing;
  const borderRadius = designConfig.borderRadius;
  const shadows = designConfig.shadows;
  const transitions = designConfig.transitions;
  const layout = designConfig.layout;
  const effects = designConfig.effects;

  return {
    // Colors
    "--color-primary": colors.primary,
    "--color-primary-light": colors.primaryLight,
    "--color-primary-dark": colors.primaryDark,
    "--color-secondary": colors.secondary,
    "--color-secondary-light": colors.secondaryLight,
    "--color-secondary-dark": colors.secondaryDark,
    "--color-background": colors.background,
    "--color-surface": colors.surface,
    "--color-text-primary": colors.textPrimary,
    "--color-text-secondary": colors.textSecondary,
    "--color-text-light": colors.textLight,
    "--color-border": colors.border,
    "--color-border-secondary": colors.borderSecondary,

    // Typography
    "--font-family-primary": typography.fontFamily.primary,
    "--font-family-secondary": typography.fontFamily.secondary,
    "--font-family-body": typography.fontFamily.body,
    "--font-size-xs": typography.fontSize.xs,
    "--font-size-sm": typography.fontSize.sm,
    "--font-size-base": typography.fontSize.base,
    "--font-size-lg": typography.fontSize.lg,
    "--font-size-xl": typography.fontSize.xl,
    "--font-size-2xl": typography.fontSize["2xl"],
    "--font-size-3xl": typography.fontSize["3xl"],
    "--font-size-4xl": typography.fontSize["4xl"],
    "--font-weight-normal": typography.fontWeight.normal,
    "--font-weight-medium": typography.fontWeight.medium,
    "--font-weight-semibold": typography.fontWeight.semibold,
    "--font-weight-bold": typography.fontWeight.bold,
    "--line-height-tight": typography.lineHeight.tight,
    "--line-height-normal": typography.lineHeight.normal,
    "--line-height-relaxed": typography.lineHeight.relaxed,

    // Spacing
    "--spacing-xs": spacing.xs,
    "--spacing-sm": spacing.sm,
    "--spacing-md": spacing.md,
    "--spacing-lg": spacing.lg,
    "--spacing-xl": spacing.xl,
    "--spacing-2xl": spacing["2xl"],
    "--spacing-3xl": spacing["3xl"],

    // Border Radius
    "--border-radius-sm": borderRadius.sm,
    "--border-radius-md": borderRadius.md,
    "--border-radius-lg": borderRadius.lg,
    "--border-radius-xl": borderRadius.xl,

    // Shadows
    "--shadow-sm": shadows.sm,
    "--shadow-md": shadows.md,
    "--shadow-lg": shadows.lg,
    "--shadow-xl": shadows.xl,
    "--drop-shadow": shadows.drop,
    "--drop-shadow-light": shadows.dropLight,

    // Transitions
    "--transition-fast": transitions.fast,
    "--transition-normal": transitions.normal,
    "--transition-slow": transitions.slow,
    "--transition-slower": transitions.slower,

    // Layout
    "--container-max-width": layout.containerMaxWidth,
    "--section-padding": layout.sectionPadding,

    // Effects
    "--backdrop-blur": effects.backdropBlur,
  };
};
