import React from 'react';
import { TextStyle } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {IconName} from "@/utils/types/IconName";

type ThemedIconProps = {
    name?: IconName;
    size?: number;
    color?: string;
    style?: TextStyle;
};

export function ThemedIcon({ name, size = 24, color = 'black', style }: ThemedIconProps) {
    const getIconComponent = (iconName: IconName) => {
        if (iconName in FontAwesome.glyphMap) return FontAwesome;
        if (iconName in Ionicons.glyphMap) return Ionicons;
        if (iconName in MaterialCommunityIcons.glyphMap) return MaterialCommunityIcons;
        if (iconName in MaterialIcons.glyphMap) return MaterialIcons;
        return MaterialCommunityIcons;
    }

    if(name){
        const IconComponent = getIconComponent(name)
        return <IconComponent name={name as any} size={size} color={color} style={style}/>
    }else{
        return <MaterialCommunityIcons name='alert' size={size} color={color} style={style}/>
    }
}
