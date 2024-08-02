import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/utils/mobile/hooks/useColorScheme';
import {useFonts} from "@/utils/hooks/useFonts";
import {AuthProvider} from "@/utils/context/authProvider";
// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts()

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <AuthProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <Stack
                    initialRouteName="index"
                    screenOptions={{
                        headerShown: false,
                    }}
              >
                  <Stack.Screen
                      name={'index'}
                      options={{
                          title: 'Welcome Screen',
                      }}
                  />
                  <Stack.Screen name="(tabs)"
                                options={{
                                    animation: 'slide_from_right'
                                }} />
              </Stack>
          </ThemeProvider>
      </AuthProvider>
  );
}
