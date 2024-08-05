import React from 'react';
import {Drawer} from "expo-router/drawer";
import {HomeDrawerContent} from "@/components/navigation/home";
import {Tab} from "@/utils/types/Tab";
import {useThemeColor} from "@/utils/hooks/mobile/useThemeColor";

export default function HomeLayout() {
    const backgroundColor = useThemeColor({}, 'background')

    const tabs: Tab[] = [
        {
            path: '/profile',
            name: 'index',
            title: 'Home',
        },
        {
            path: '/settings',
            name: 'settings',
            title: 'Settings',
        },
    ]


    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                overlayColor: 'transparent',
                sceneContainerStyle:{
                    backgroundColor: backgroundColor
                },
                drawerPosition:'right'
            }}
            initialRouteName={'home'}
            drawerContent={(props) =>
                <HomeDrawerContent items={tabs} logout {...props} />}
        >
            {
                tabs.map((tab, index) => (
                        <Drawer.Screen
                            name={tab.name}
                            key={index}
                        />
                ))
            }
        </Drawer>
    );
}

