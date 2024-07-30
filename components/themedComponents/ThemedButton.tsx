import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    TouchableHighlightProps,
    TouchableOpacityProps,
    View, Text
} from "react-native";
import { Theme } from "@/utils/types/Theme";
import { useThemeColor } from "@/utils/mobile/hooks/useThemeColor";

type ThemeButtonProps = Theme & TouchableWithoutFeedbackProps & TouchableHighlightProps & TouchableOpacityProps;
type Feedback = 'none' | 'highlight' | 'opacity'

const ButtonContainer = ({feedback, backgroundColor, style, ...props}:
                             ThemeButtonProps & {feedback: Feedback, backgroundColor: string}) =>{
    const getButtonComponent = () =>{
        switch (feedback){
            case "highlight":
                return TouchableHighlight;
            case "opacity":
                return TouchableOpacity
            default:
                return TouchableWithoutFeedback
        }
    }

    const Component = getButtonComponent();

    if(feedback === 'none'){
        return (
            <TouchableWithoutFeedback {...props}>
                <View style={[{backgroundColor}, style]}>
                    {props.children}
                </View>
            </TouchableWithoutFeedback>)
    }

    return (
        <Component style={[{backgroundColor}, style]} {...props}>
            {props.children}
        </Component>
    )
}

interface ButtonTitleProps{
    title?: string;
    style?: React.ComponentProps<typeof Text>['style'];
    color?: string
}

const ButtonTitle = ({title, style, color}:ButtonTitleProps) => (
    title ? (
        <Text style={[{color}, style]}>{title}</Text>
    ): null
)

interface ThemedButtonProps extends ThemeButtonProps{
    feedback?: Feedback,
    titleStyle?: React.ComponentProps<typeof Text>['style'],
    titleTheme?: Theme,
    buttonTheme?: Theme,
    title?: string
}

// Main Button Component
export function Button({feedback = 'none', style, dark, light, titleTheme,
                           title, children, titleStyle, ...props}: ThemedButtonProps){
    const buttonBackground = useThemeColor({ dark, light }, 'button');
    const buttonTitleColor = useThemeColor(titleTheme ? titleTheme : {}, 'buttonText');

    return (
        <ButtonContainer
            feedback={feedback}
            style={style}
            backgroundColor={buttonBackground}
            {...props}
        >
            <ButtonTitle title={title} style={titleStyle} color={buttonTitleColor} />
            {children}
        </ButtonContainer>
    );
}
