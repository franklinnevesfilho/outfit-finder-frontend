import React from 'react';
import {Screen, Button, IntroHeader, View, Text} from '@/components'
import {useRouter} from "expo-router";
import {StyleSheet} from "react-native";
import TextSizes from "@/utils/constants/TextSizes";
import ThemedInput from "@/components/themedComponents/ThemedInput";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useThemeColor} from "@/utils/mobile/hooks/useThemeColor";
import {useAuth} from "@/app/_layout";

export default function Login() {
    const {signIn} = useAuth()
    const router = useRouter()
    const borderColor = useThemeColor({}, 'border')

    return (
        <Screen>
            <IntroHeader/>
            <View style={styles.middleContainer}>
                <View style={[styles.form, {borderColor}]}>
                    <ThemedInput placeholder={'Email'}/>
                    <ThemedInput placeholder={'Password'}/>
                    <View style={[styles.submitContainer]}>
                        <Button
                            textStyle={{
                                fontSize: TextSizes['L']
                            }}
                            onPress={()=>{
                                signIn('email', 'password').then(()=>{
                                    router.navigate('/(tabs)')
                                })
                            }}
                            style={styles.loginBtn} title={'Login'} />
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    loginBtn:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        borderRadius: 10,
    },
    submitContainer:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 40,
    },
    middleContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    form:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
    }
})