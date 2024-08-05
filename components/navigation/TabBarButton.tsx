import React from 'react';
import {ThemedButtonProps} from "@/components/themedComponents/ThemedButton";
import {Button, Icon} from "@/components";
import {Tab} from "@/utils/types/Tab";

interface TabBarButtonProps extends ThemedButtonProps{
    tab: Tab;
    active: boolean;
    handlePress: (tab: Tab) => void;
}

export function TabBarButton({tab, active, handlePress, ...props}: TabBarButtonProps) {
    const [size, setSize] = React.useState<number>(25);

    return (
        <Button
            style={props.style}
            onPress={() => handlePress(tab)}
            onPressIn={() => setSize(size - 5)}
            onPressOut={() => setSize(25)}
        >
            <Icon
                type={active? tab.activeIconType : tab.inactiveIconType}
                name={active? tab.activeIcon : tab.inactiveIcon}
                size={size}
            />
        </Button>
    );
}

