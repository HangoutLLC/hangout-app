import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider as RNEThemeProvider } from '@rneui/themed';
import { buildAppTheme } from '@/constants/themes';
import { useColorScheme } from '@/hooks/useColorScheme';
// import {
//   LibertinusSerif_400Regular,
//   LibertinusSerif_600SemiBold,
//   LibertinusSerif_700Bold,
// } from '@expo-google-fonts/libertinus-serif';
import { PaperProvider } from 'react-native-paper';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const mode = colorScheme === 'dark' ? 'dark' : 'light';
  const appTheme = buildAppTheme(mode);
  const navTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // LibertinusSerif_400Regular,
    // LibertinusSerif_600SemiBold,
    // LibertinusSerif_700Bold,
  })

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={navTheme}>
      <RNEThemeProvider
        theme={appTheme}
      >
        <PaperProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </PaperProvider>
      </RNEThemeProvider>
    </ThemeProvider>
  );
}
