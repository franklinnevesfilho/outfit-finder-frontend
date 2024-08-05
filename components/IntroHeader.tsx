import {StyleSheet} from 'react-native'
import {View, Text, Button} from './themedComponents'
import {useNavigation} from "expo-router";
import {Icon} from "@/components/themedComponents/Icon";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function IntroHeader() {
    const insets = useSafeAreaInsets()
    const navigator = useNavigation()

    return (
        <View style={[styles.header, {top:insets.top}]}>
            {
                navigator.canGoBack() &&
                <Button style={styles.backBtn} onPress={() => navigator.goBack()}>
                    <Icon name={'keyboard-arrow-left'} size={55}/>
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
