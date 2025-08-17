// rneui-theme.d.ts
import '@rneui/themed';
import type { ThemeColors } from '@/constants/themes/colors';

declare module '@rneui/themed' {
  // extend the RNEUI theme to include our custom colors
  interface Colors extends ThemeColors {}

  // extend the RNEUI theme to include our custom typography
  // make custom key available at runtime
  interface FullTheme {
    typography?: {
      family: {
        regular?: string;
        medium?: string;
        bold?: string;
      };
    };
  }

  // allow passing typography into createTheme
  interface CreateThemeOptions {
    typography?: {
      family: {
        regular?: string;
        medium?: string;
        bold?: string;
      };
    };  
  }

  // make typography visible to Theme
  interface Theme {
    typography?: {
      family: {
        regular?: string;
        medium?: string;
        bold?: string;
      };
    };
  }
}