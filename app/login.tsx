import React from 'react';
import {Screen, Button, Text} from '@/components'
import {Link, useRouter} from "expo-router";
import {StyleSheet} from "react-native";

export default function Login() {
    const router = useRouter()

    return (
        <Screen>
            <Button
                onPress={()=>{
                    router.replace("/(tabs)")
                }}
                style={styles.login} title={'Login'} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    login:{
        padding:5,
        borderRadius: 10
    }
})