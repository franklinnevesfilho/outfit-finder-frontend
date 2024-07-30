import {Text as DefaultText, TextProps} from 'react-native';
import { Theme } from '@/utils/types/Theme';
import { useThemeColor } from '@/utils/mobile/hooks/useThemeColor';
import Fonts from '@/utils/constants/Fonts';

type ThemeTextProps = Theme & TextProps

interface ThemedTextProps extends ThemeTextProps {
    font?: keyof typeof Fonts;
}

export function Text({ font, light, dark, style, ...props }: ThemedTextProps) {
    const fontFamily = font ? font : undefined;
    const color = useThemeColor({ light, dark }, 'text');

    return (
        <DefaultText style={[{ fontFamily }, { color }, style]} {...props} />
    );
}
