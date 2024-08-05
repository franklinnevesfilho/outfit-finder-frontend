import {Href} from "expo-router";
import {IconName, IconTypes} from "@/components/themedComponents/Icon";

export type Drawer = {
    path: Href<string | object>;
    title: string;
    activeIconType?: IconTypes;
    activeIcon?: IconName;
    inactiveIconType?: IconTypes;
    inactiveIcon?: IconName;
    options?: any;
}