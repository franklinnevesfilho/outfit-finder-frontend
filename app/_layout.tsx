import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {Stack, useRouter} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect} from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/utils/hooks/mobile/useColorScheme';
import {useFonts} from "@/utils/hooks/useFonts";
import {AuthProvider} from "@/utils/context/authProvider";
import {useAuth} from "@/utils/hooks";
// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';
export {useAuth} from "@/utils/hooks";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
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

  return (
      <AuthProvider>
          <ThemeProvider value={colorScheme == 'dark' ? DarkTheme : DefaultTheme}>
              <RootLayoutNav />
          </ThemeProvider>
      </AuthProvider>
  )
}

function RootLayoutNav() {
    const router = useRouter();
    const {token} = useAuth()

    const onAuth = useCallback(async () => {
        token().then(token => {
            if (token) {
                console.log('Token:', token);
                router.navigate('/profile');
            } else {
                console.log('No token found');
                router.navigate('/');
            }
        })
    }, [token]);


    useEffect(() => {
        onAuth().then(() => console.log('Auth check complete'));
    }, [onAuth]);


  return (
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
  );
}
