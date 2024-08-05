import { StyleSheet } from 'react-native';
import {Button, Screen, Text} from "@/components";
import {Link, useRouter} from "expo-router";
import {useAuth} from "@/app/_layout";

export default function TabOneScreen() {
    const {signOut} = useAuth()
    const router = useRouter()
  return (
    <Screen>
      <Text>Testing</Text>
        <Button
            onPress={()=>{
                signOut().then(()=>{
                    router.navigate('/login')
                })
            }}
            title={'Go to Login'}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
});
