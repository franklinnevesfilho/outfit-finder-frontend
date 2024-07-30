import Colors from "@/utils/constants/Colors";

export type Theme ={
    light?: string,
    dark?: string
}

export interface ThemedProps{
    themeColors: Theme,
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
}