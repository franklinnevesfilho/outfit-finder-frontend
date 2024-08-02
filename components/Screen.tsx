import {View} from "./themedComponents";
import React from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

type ScreenProps = React.ComponentProps<typeof View>

export function Screen({style, ...props}: ScreenProps) {
    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container} {...props}>
            <View style={[styles.screen,{paddingTop: insets.top, paddingBottom: insets.bottom}, style]} {...props}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    screen:{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
