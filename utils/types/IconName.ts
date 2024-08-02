import {FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export type IconName =
    | keyof typeof FontAwesome.glyphMap
    | keyof typeof Ionicons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof MaterialIcons.glyphMap;