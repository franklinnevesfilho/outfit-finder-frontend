import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/utils/constants/Colors';
import { useColorScheme } from '@/utils/mobile/hooks/useColorScheme';
import { useClientOnlyValue } from '@/utils/mobile/hooks/useClientOnlyValue';
import {ThemedIcon} from "@/components/themedComponents/ThemedIcon";
import {IconName} from "@/utils/types/IconName";

type tab = {
    name: string;
    title: string;
    icon?: IconName;
    options?: any;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabs: tab[] = [
      {
          name: 'index',
          title: 'Home',
          icon: 'home',
      },
      {
          name: 'closet',
          title: 'Closet',
      },
      {
          name: 'settings',
          title: 'Settings',
      }
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
        {
            tabs.map((tab, index) => (
                <Tabs.Screen
                    key={index}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ color }) => (
                            <ThemedIcon name={tab.icon} color={color} size={24} />
                        ),
                    }}
                />
            ))
        }
    </Tabs>
  );
}
