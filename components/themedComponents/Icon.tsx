import React from 'react';
import { TextStyle } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {useThemeColor} from "@/utils/hooks/mobile/useThemeColor";
import {Theme} from "@/utils/types/Theme";

const iconTypes = {
    FontAwesome: FontAwesome,
    Ionicons: Ionicons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    MaterialIcons: MaterialIcons
}

export type IconTypes = keyof typeof iconTypes;

export type IconName =
    | keyof typeof FontAwesome.glyphMap
    | keyof typeof Ionicons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof MaterialIcons.glyphMap;

type ThemedIconProps = {
    name?: IconName;
    type?: IconTypes;
    size?: number;
    color?: Theme;
    style?: TextStyle;
};

export function Icon({ name, size = 24, color ={light:'black', dark:'white'}, style, type}: ThemedIconProps) {
    const iconColor = useThemeColor( color, 'text');

    const getIconComponent = (iconName: IconName) => {
        if (iconName in FontAwesome.glyphMap) return FontAwesome;
        if (iconName in Ionicons.glyphMap) return Ionicons;
        if (iconName in MaterialCommunityIcons.glyphMap) return MaterialCommunityIcons;
        if (iconName in MaterialIcons.glyphMap) return MaterialIcons;
        return MaterialCommunityIcons;
    }

    if(name && type){
        const IconComponent = iconTypes[type]

        if(IconComponent === MaterialCommunityIcons){
            size += 5
        }

        return <IconComponent name={name as any} size={size} color={iconColor} style={style}/>
    }
    else if(name){
        const IconComponent = getIconComponent(name)
        return <IconComponent name={name as any} size={size} color={iconColor} style={style}/>
    }else{
        return <MaterialCommunityIcons name='alert' size={size} color={iconColor} style={style}/>
    }
}
