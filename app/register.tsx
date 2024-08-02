import React from 'react';
import {Screen, View, Text, IntroHeader, Button} from "@/components";
import {StyleSheet} from "react-native";
import TextSizes from "@/utils/constants/TextSizes";
import ThemedInput from "@/components/themedComponents/ThemedInput";

export default function Register() {
    return (
        <Screen>
            <IntroHeader/>
            <View style={styles.form}>
                <ThemedInput placeholder={'First Name'}/>
                <ThemedInput placeholder={'Last Name'}/>
                <ThemedInput placeholder={'Gender'}/>
                <ThemedInput placeholder={'Email'}/>
                <ThemedInput placeholder={'Password'}/>
                <ThemedInput placeholder={'Confirm Password'}/>
            </View>
            <Button style={styles.registerBtn} textStyle={styles.registerTxt} title={'Submit'}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '100%',
        paddingBottom: 50
    },
    registerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        minHeight: 50,
        marginTop: 'auto',
        marginBottom: 20,
        borderRadius: 10
    },
    registerTxt: {
        fontSize: TextSizes['L']
    }
})