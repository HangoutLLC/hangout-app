/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { lightTheme, darkTheme } from '@/constants/colors_clean';
import { useColorScheme } from '@/hooks/useColorScheme';

// Create Colors object structure to maintain compatibility
const Colors = {
  light: lightTheme,
  dark: darkTheme,
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
