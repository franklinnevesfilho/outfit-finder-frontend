import {View} from "./themedComponents";
import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "expo-router";

type ScreenProps = React.ComponentProps<typeof View> & {
    title?: string
}

export function Screen({style, title='Title', ...props}: ScreenProps) {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: title
        })
    }, []);
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
