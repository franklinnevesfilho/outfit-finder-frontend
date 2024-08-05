import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    TouchableHighlightProps,
    TouchableOpacityProps,
    View, Text, StyleSheet, StyleProp, ViewStyle
} from "react-native";
import { Theme } from "@/utils/types/Theme";
import { useThemeColor } from "@/utils/hooks/mobile/useThemeColor";

type ThemeButtonProps = Theme & TouchableWithoutFeedbackProps & TouchableHighlightProps & TouchableOpacityProps;
type Feedback = 'none' | 'highlight' | 'opacity';

const ButtonContainer = ({ feedback, backgroundColor, style, defaultStyle, ...props }:
                             ThemeButtonProps & { feedback: Feedback, backgroundColor: string, defaultStyle?: boolean }) => {

    const combinedStyle: StyleProp<ViewStyle> =
        defaultStyle ? [styles.defaultButton, { backgroundColor }, style] :
            style

    switch (feedback) {
        case "highlight":
            return (
                <TouchableHighlight style={styles.touchableStyle} {...props}>
                    <View style={combinedStyle}>
                        {props.children}
                    </View>
                </TouchableHighlight>
            );
        case "opacity":
            return (
                <TouchableOpacity style={combinedStyle} {...props}>
                    {props.children}
                </TouchableOpacity>
            );
        default:
            return (
                <TouchableWithoutFeedback {...props}>
                    <View style={combinedStyle}>
                        {props.children}
                    </View>
                </TouchableWithoutFeedback>
            );
    }
};

interface ButtonTitleProps {
    title?: string;
    style?: React.ComponentProps<typeof Text>['style'];
    color?: string;
}

const ButtonTitle = ({ title, style, color }: ButtonTitleProps) => (
    title ? (
        <Text style={[{ color }, style]}>{title}</Text>
    ) : null
);

export interface ThemedButtonProps extends ThemeButtonProps {
    feedback?: Feedback;
    textStyle?: React.ComponentProps<typeof Text>['style'];
    titleTheme?: Theme;
    buttonTheme?: Theme;
    title?: string;
    defaultStyle?: boolean;
}

// Main Button Component
export function Button({ feedback = 'none', style, dark, light, titleTheme,
                           title, children, textStyle, defaultStyle=true, ...props }: ThemedButtonProps) {
    const buttonBackground = useThemeColor({ dark, light }, 'button');
    const buttonTitleColor = useThemeColor(titleTheme ? titleTheme : {}, 'buttonText');

    return (
        <ButtonContainer
            feedback={feedback}
            style={style}
            backgroundColor={buttonBackground}
            defaultStyle={defaultStyle}
            {...props}
        >
            <ButtonTitle title={title} style={textStyle} color={buttonTitleColor} />
            {children}
        </ButtonContainer>
    );
}

const styles = StyleSheet.create({
    defaultButton: {
        padding: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AEAEAE'
    },
    touchableStyle: {
        borderRadius: 5,
        overflow: 'hidden'
    }
});
