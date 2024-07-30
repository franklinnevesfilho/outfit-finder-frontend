import React from 'react'
import {Screen, Button, View, Text} from "@/components";
import {Href, Link, useRouter} from "expo-router";
import { StyleSheet} from "react-native";

export default function Index() {
    const router = useRouter()

    const goTo = (path:Href<string>) =>{
        router.push(path)
    }

    return (
        <Screen>
            <View>

            </View>

            <Button onPress={()=> goTo('/login')} title={'Login'}/>
            <Button onPress={()=> goTo('/register')} title={'Register'}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    loginBtn:{

    }
})

