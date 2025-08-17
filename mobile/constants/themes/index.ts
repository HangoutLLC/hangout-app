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
  });
}
