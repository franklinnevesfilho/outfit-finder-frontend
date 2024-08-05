import React from 'react'
import {StyleSheet} from 'react-native'
import Animated, {interpolate, interpolateColor, useAnimatedStyle} from 'react-native-reanimated'
import {DrawerNavigationProp, useDrawerProgress} from "@react-navigation/drawer";
import {useThemeColor} from "@/utils/hooks/mobile/useThemeColor";
import {DrawerHeader} from "@/components/navigation/home/DrawerHeader";
import {useNavigation} from "expo-router";
import {Screen} from "@/components";

interface ScreenWrapperProps {
    title?: string,
    children: React.ReactNode,
}

export function DrawerScreen({title,children}: ScreenWrapperProps) {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    const progress = useDrawerProgress();

    const borderColor = useThemeColor({}, 'border')
    const backgroundColor = useThemeColor({}, 'background')

    const animatedStyles = useAnimatedStyle(() =>
        ({
            transform: [{
                scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
            }],
            borderColor: interpolateColor(
                progress.value,
                [0, 1],
                [backgroundColor, borderColor] // Replace these colors with your desired start and end colors
            ),
            borderRadius: 30,
        })
    )

    return (
        <Animated.View style={[styles.container,animatedStyles]}>
            <DrawerHeader navigation={navigation}/>
            <Screen title={title}>
                {children}
            </Screen>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 30,
        borderWidth: 1,
    }
})
