import {Href} from "expo-router";
import {IconName, IconTypes} from "@/components/themedComponents/Icon";

export type Tab = {
    path: Href<string | object>;
    name?: string;
    title: string;
    activeIconType?: IconTypes;
    activeIcon?: IconName;
    inactiveIconType?: IconTypes;
    inactiveIcon?: IconName;
    options?: any;
}