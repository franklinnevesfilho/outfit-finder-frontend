import {useFonts as useDefaultFonts} from "expo-font";
import Fonts from "@/utils/constants/Fonts";

export function useFonts(){
    return useDefaultFonts(Fonts)
}