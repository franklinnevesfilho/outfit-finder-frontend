import { StyleSheet } from 'react-native';
import {Button, Screen, Text} from "@/components";
import {Link, useRouter} from "expo-router";

export default function TabOneScreen() {
    const router = useRouter()
  return (
    <Screen>
      <Text>Testing</Text>
        <Button
            onPress={()=>{
                router.replace('/')
            }}
            title={'Go to Login'}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
});
