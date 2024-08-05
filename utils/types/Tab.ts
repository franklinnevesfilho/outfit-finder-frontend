import {IconName} from "./IconName";
import {Href} from "expo-router";

export type Tab = {
    name: Href<string | object>;
    title: string;
    activeIcon?: IconName;
    inactiveIcon?: IconName;
    options?: any;
}