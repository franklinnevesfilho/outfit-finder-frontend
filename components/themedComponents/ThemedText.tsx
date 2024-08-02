import {Text as DefaultText, TextProps} from 'react-native';
import { Theme } from '@/utils/types/Theme';
import { useThemeColor } from '@/utils/mobile/hooks/useThemeColor';
import Fonts from '@/utils/constants/Fonts';
import TextSizes from "@/utils/constants/TextSizes";

type ThemeTextProps = Theme & TextProps

interface ThemedTextProps extends ThemeTextProps {
    size?: keyof  typeof TextSizes;
    font?: keyof typeof Fonts;
}

export function Text({ font, size, light, dark, style, ...props }: ThemedTextProps) {
    const fontFamily = font ? font : undefined;
    const color = useThemeColor({ light, dark }, 'text');

    return (
        <DefaultText style={[{ fontFamily }, { color }, {fontSize: size ? TextSizes[size] : 16}, style]} {...props} />
    );
}
