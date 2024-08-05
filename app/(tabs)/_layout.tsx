import React from 'react';
import {Tabs, useRouter} from 'expo-router';

import Colors from '@/utils/constants/Colors';
import { useColorScheme } from '@/utils/hooks/mobile/useColorScheme';
import {useAuth} from "@/app/_layout";
import {MainTabBar} from "@/components/navigation/MainTabBar";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {token} = useAuth();
  const router = useRouter();

  const onAuth = React.useCallback(async () => {
    token().then(token => {
      if (token) {
        console.log('Token:', token);
        router.navigate('/profile');
      } else {
        router.navigate('/login');
      }
    });
  }, [])

    React.useEffect(() => {
        onAuth().then(() => console.log('Auth check complete tabs'));
    },[])

  return (
    <Tabs
        initialRouteName={'/home'}
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
        tabBar={() => <MainTabBar />}
    />
  );
}
