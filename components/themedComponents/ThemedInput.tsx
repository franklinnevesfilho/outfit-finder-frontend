import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import { View, Text } from '@/components'
import {useThemeColor} from "@/utils/mobile/hooks/useThemeColor";

interface ThemedInputProps extends TextInputProps{
    placeholder?: string
    value?: string
    onChangeText?: (text: string) => void
    containerStyle?: any
}

export default function ThemedInput({containerStyle, placeholder='Placeholder', ...props}: ThemedInputProps) {
    const borderColor = useThemeColor({}, 'border')
    const backgroundColor = useThemeColor({}, 'background')
    const TextColor = useThemeColor({}, 'text')

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.input, {
                    backgroundColor,
                    color: TextColor,
                    borderColor
                }]}
                placeholderTextColor={'rgba(135,135,135,0.7)'}
                placeholder={placeholder}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    input: {
        minHeight: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
})
