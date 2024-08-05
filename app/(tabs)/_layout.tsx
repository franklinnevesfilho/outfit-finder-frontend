import React from 'react';
import {Tabs, useRouter} from 'expo-router';

import Colors from '@/utils/constants/Colors';
import { useColorScheme } from '@/utils/mobile/hooks/useColorScheme';
import { useClientOnlyValue } from '@/utils/mobile/hooks/useClientOnlyValue';
import {useAuth} from "@/app/_layout";
import {TabBar} from "@/components/navigation/TabBar";
import {Tab} from "@/utils/types/Tab";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {token} = useAuth();
  const router = useRouter();

  const tabs: Tab[] = [
      {
          name: 'marketplace',
          title: 'Store',
          icon: 'shopping-cart',
      },
      {
            name: 'gallery',
            title: 'Gallery',
            icon: 'image',
      },
      {
          name: 'index',
          title: 'Home',
          icon: 'home',
      },
      {
          name: 'closet',
          title: 'Wardrobe',
      },
      {
          name: 'settings',
          title: 'Profile',
      }
  ];

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
        onAuth().then(r => console.log('Auth check complete'));
    },[])

  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={(props) => <TabBar tabs={tabs}  {...props}/>}
    />
  );
}
