import {View} from "./themedComponents";
import React from "react";
import {StyleSheet} from "react-native";

type ScreenProps = React.ComponentProps<typeof View>

export function Screen({style, ...props}: ScreenProps) {


    return (
        <View style={[styles.screen, style]} {...props}/>
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
