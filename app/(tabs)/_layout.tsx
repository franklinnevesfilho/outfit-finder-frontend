import React from 'react';
import {Tabs, useRouter} from 'expo-router';

import Colors from '@/utils/constants/Colors';
import { useColorScheme } from '@/utils/mobile/hooks/useColorScheme';
import { useClientOnlyValue } from '@/utils/mobile/hooks/useClientOnlyValue';
import {useAuth} from "@/app/_layout";
import {TabBar} from "@/components/navigation/TabBar";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {token} = useAuth();
  const router = useRouter();

  const onAuth = React.useCallback(async () => {
    token().then(token => {
      if (token) {
        console.log('Token:', token);
        router.navigate('/(tabs)');
      } else {
        router.navigate('/login');
      }
    });
  }, [])

    React.useEffect(() => {
        onAuth().then(() => console.log('Auth check complete'));
    },[])

  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={() => <TabBar />}
    />
  );
}
