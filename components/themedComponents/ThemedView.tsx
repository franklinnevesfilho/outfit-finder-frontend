import {View as DefaultView} from 'react-native'
import {useThemeColor} from "@/utils/mobile/hooks/useThemeColor";
import React from "react";
import {Theme} from "@/utils/types/Theme";

type ThemeViewProps = Theme & DefaultView['props']

export function View({style, light, dark, ...props}: ThemeViewProps){
    const backgroundColor = useThemeColor({light: light, dark: dark}, 'background')
    return <DefaultView style={[{backgroundColor}, style]} {...props}/>
}