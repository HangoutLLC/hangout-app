// rneui-theme.d.ts
import '@rneui/themed';
import type { ThemeColors } from '@/constants/themes/colors';

declare module '@rneui/themed' {
  interface Colors extends ThemeColors {}
}