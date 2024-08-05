import React from 'react';
import {View, Text} from "@/components";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {Tab} from "@/utils/types/Tab";
import {StyleSheet} from "react-native";

interface TabBarProps extends BottomTabBarProps {
    tabs: Tab[]
}

export function TabBar({tabs}: TabBarProps) {
    return (
        <View style={styles.tabBar}>
            {tabs.map((tab, index) => (
                <View key={index}>
                    <Text>{tab.title}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    }
})

