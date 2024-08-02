import React from 'react'
import {Screen, Button, View, Text} from "@/components";
import {Href, useRouter} from "expo-router";
import { StyleSheet} from "react-native";
import TextSizes from "@/utils/constants/TextSizes";

export default function Index() {
    const router = useRouter()

    const goTo = (path:Href<string>) =>{
        router.push(path)
    }

    return (
        <Screen>
            <View style={styles.title}>
                <Text size={'Title'} font={'PlayWrite'}>
                    Outfit Finder
                </Text>
            </View>
            <View style={styles.footer}>
                <Button
                    feedback={'highlight'}
                    style={styles.registerButton}
                    textStyle={{fontSize: TextSizes['L']}}
                    onPress={()=> goTo('/register')}
                    title={'Register'}/>
                <View style={styles.signIn}>
                    <Text>Already have an account?</Text>
                    <Text
                        style={styles.signInText}
                        onPress={()=>{
                        goTo('/login')
                    }}>Sign in</Text>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    footer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: 50
    },
    registerButton:{
        minHeight: 50,
        minWidth: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signIn:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    signInText:{
        color: '#0075ff'
    },
    title:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto'
    }
})

