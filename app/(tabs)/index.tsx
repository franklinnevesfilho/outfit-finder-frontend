import { StyleSheet } from 'react-native';
import {Screen, Text} from "@/components";
import {Link} from "expo-router";

export default function TabOneScreen() {
  return (
    <Screen>
      <Text>Testing</Text>
      <Link href={'/'}>
        <Text>Log out</Text>
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
});
