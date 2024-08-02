import {StyleSheet} from 'react-native'
import {View, Text, Button} from './themedComponents'
import {useNavigation, useRouter} from "expo-router";
import {ThemedIcon} from "@/components/themedComponents/ThemedIcon";
import {useThemeColor} from "@/utils/mobile/hooks/useThemeColor";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function IntroHeader() {
    const insets = useSafeAreaInsets()
    const textColor = useThemeColor({}, 'text')
    const navigator = useNavigation()

    return (
        <View style={[styles.header, {top:insets.top}]}>
            {
                navigator.canGoBack() &&
                <Button style={styles.backBtn} onPress={() => navigator.goBack()}>
                    <ThemedIcon name={'keyboard-arrow-left'} color={textColor} size={55}/>
                </Button>

            }
            <Text size={'Title'} font={'PlayWrite'}>Outfit Finder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        zIndex: 100,
    },
    backBtn:{
        left: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0,
    }
})
