import React from 'react';
import {View, Text, Button} from "@/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import {Href, useRouter} from "expo-router";
import {Tab} from "@/utils/types/Tab";
import LogoutButton from "@/components/navigation/LogoutButton";

interface HomeDrawerContentProps extends DrawerContentComponentProps {
    items: Tab[];
    logout?: boolean
}

export function HomeDrawerContent({items, navigation, logout}: HomeDrawerContentProps) {
    const router = useRouter();
    const handlePress = (path: Href<string | object>) => {
        router.navigate(path);
        navigation.closeDrawer();
    };

    const DrawerItem = ({tab}: {tab: Tab }) => {
        return (
            <Button
                defaultStyle={false}
                style={styles.drawerItem}
                onPress={() => handlePress(tab.path)}
            >
                <Text>{tab.title}</Text>
            </Button>
        );
    };

    return (
        <View style={[styles.container]}>
            <View style={styles.list}>
                {items.map((tab, index) => (
                    <DrawerItem tab={tab} key={index}/>
                ))}
                <View style={styles.logout}>
                    {logout && (
                        <LogoutButton/>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    list:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    logout: {
        position: 'absolute',
        bottom: 0,
    }
});
