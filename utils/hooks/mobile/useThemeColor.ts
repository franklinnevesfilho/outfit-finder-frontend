import {useColorScheme} from "react-native";
import {Theme} from "@/utils/types/Theme";
import Colors from "@/utils/constants/Colors";
import {Color} from "@/utils/types/Color";

export function useThemeColor(themeColors: Theme, colorName: Color){
    const theme = useColorScheme() ?? 'light'
    const colorFromProps = themeColors[theme]

    if (colorFromProps){
        return colorFromProps
    }
    else{
        return Colors[theme][colorName]
    }

}