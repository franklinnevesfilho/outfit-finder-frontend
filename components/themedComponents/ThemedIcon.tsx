import React from 'react';
import { TextStyle } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {IconName} from "@/utils/types/IconName";
import {useThemeColor} from "@/utils/mobile/hooks/useThemeColor";
import {Theme} from "@/utils/types/Theme";

type ThemedIconProps = {
    name?: IconName;
    size?: number;
    color?: Theme;
    style?: TextStyle;
};

export function ThemedIcon({ name, size = 24, color ={light:'black', dark:'white'}, style }: ThemedIconProps) {
    const iconColor = useThemeColor( color, 'text');

    const getIconComponent = (iconName: IconName) => {
        if (iconName in FontAwesome.glyphMap) return FontAwesome;
        if (iconName in Ionicons.glyphMap) return Ionicons;
        if (iconName in MaterialCommunityIcons.glyphMap) return MaterialCommunityIcons;
        if (iconName in MaterialIcons.glyphMap) return MaterialIcons;
        return MaterialCommunityIcons;
    }

    if(name){
        const IconComponent = getIconComponent(name)
        return <IconComponent name={name as any} size={size} color={iconColor} style={style}/>
    }else{
        return <MaterialCommunityIcons name='alert' size={size} color={iconColor} style={style}/>
    }
}
