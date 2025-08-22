// theme/index.ts
import { createTheme } from '@rneui/themed';
import { lightTheme, darkTheme } from './colors';


export function buildAppTheme(mode: 'light' | 'dark') {
  // define typography constants
  const typography = {
    family: {
      regular: 'LibertinusSerif_400Regular',
      medium:  'LibertinusSerif_600SemiBold',
      bold:    'LibertinusSerif_700Bold',
    }
  };
  
  return createTheme({
    mode,
    lightColors: lightTheme,
    darkColors: darkTheme,
    components: {
        Button: {
            raised: true,
            buttonStyle: { borderRadius: 12 },
            titleStyle: { fontWeight: '700' },
        },
        Text: {
            h1Style: { fontSize: 28, fontWeight: '800' },
        },
    },
    typography,
    tokens: {
      iconSizes: { sm: 16, md: 20, lg: 24 },
      minTouchTarget: 44,
      listItem: {
        height:      { sm: 44, md: 56, lg: 72 },
        paddingH:    { sm: 12, md: 16, lg: 16 },
        paddingV:    { sm: 6,  md: 8,  lg: 10 },
        gap:         12,
        titleSize:   { sm: 14, md: 16, lg: 16 },
        subtitleSize:{ sm: 12, md: 13, lg: 13 },
        radius:      10,
      },
    },
  });
}
