'use client';
type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    sidebarBg: string;
    textSecondary: string;
    hoverBg: string;
    accent: string;
    secondaryAccent: string;
  };
};
const theme: Theme = {
  colors: {
    primary: '#3A6EA5',
    secondary: '#ff4081',
    background: '#F0F4F8',
    text: '#2B2B2B',
    textSecondary: '#a9a9b8',
    sidebarBg: '#1e1e2d',
    hoverBg: '#29293e',
    accent: '#2EC4B6', // Mint Green
    secondaryAccent: '#FF6B35', // Warm Orange
  },
};

export default theme;
