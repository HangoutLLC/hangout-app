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

  // allow passing typography and tokens into createTheme
  interface CreateThemeOptions {
    typography?: {
      family: {
        regular?: string;
        medium?: string;
        bold?: string;
      };
    };
    tokens?: {
      iconSizes?: Partial<{ sm: number; md: number; lg: number }>;
      minTouchTarget?: number;
      listItem: {
        height:      { sm: number; md: number; lg: number };
        paddingH:    { sm: number; md: number; lg: number };
        paddingV:    { sm: number; md: number; lg: number };
        gap:         number;
        titleSize:   { sm: number; md: number; lg: number };
        subtitleSize:{ sm: number; md: number; lg: number };
        radius:      number;
      };
      
      select?: {
        radius: number;
        borderWidth: number;
        paddingH: { sm: number; md: number; lg: number };
        paddingV: { sm: number; md: number; lg: number };
        controlHeight: { sm: number; md: number; lg: number };
        fontSize: { sm: number; md: number; lg: number };
        panelMaxHeight: number;
        panelElevationAndroid: number;
        zIndexIOS: number;
        searchPaddingV: number;
        gapAbove: number;
        gapBelow: number;

      };

      page: {
        gutter: { sm: number; md: number; lg: number };
        contentGap: number;
        header: { height: { page: number; modal: number; home: number; }; gap: number; };
        footer: { height: number; inset: number; radius: number; elevation: number;};
      }
    };
  }

  // make typography and token sizes visible to Theme
  interface Theme {
    typography?: {
      family: {
        regular?: string;
        medium?: string;
        bold?: string;
      };
    };
    tokens: {
      iconSizes: { sm: number; md: number; lg: number };
      minTouchTarget: number;
      listItem: {
        height:      { sm: number; md: number; lg: number };
        paddingH:    { sm: number; md: number; lg: number };
        paddingV:    { sm: number; md: number; lg: number };
        gap:         number;
        titleSize:   { sm: number; md: number; lg: number };
        subtitleSize:{ sm: number; md: number; lg: number };
        radius:      number;
      };
      
      select?: {
        radius: number;
        borderWidth: number;
        paddingH: { sm: number; md: number; lg: number };
        paddingV: { sm: number; md: number; lg: number };
        controlHeight: { sm: number; md: number; lg: number };
        fontSize: { sm: number; md: number; lg: number };
        panelMaxHeight: number;
        panelElevationAndroid: number;
        zIndexIOS: number;
        searchPaddingV: number;
        gapAbove: number;
        gapBelow: number;

      };

      page: {
        gutter: { sm: number; md: number; lg: number };
        contentGap: number;
        header: { height: { page: number; modal: number; home: number; }; gap: number; };
        footer: { height: number; inset: number; radius: number; elevation: number;};
      }
    };
  }
}