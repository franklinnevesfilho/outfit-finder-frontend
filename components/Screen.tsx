import {View} from "./themedComponents";
import React from "react";
import {StyleSheet, useWindowDimensions} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

type ScreenProps = React.ComponentProps<typeof View>

export function Screen({style, ...props}: ScreenProps) {
    const insets = useSafeAreaInsets()

    return (
        <View style={[styles.screen,{paddingTop: insets.top, paddingBottom: insets.bottom}, style]} {...props}/>
    )
}

const styles = StyleSheet.create({
    screen:{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
