import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useNavigation} from "expo-router";
import {useEffect} from "react";

export default function MarketplaceDrawer() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index"/>
                <Drawer.Screen name="wishlist"/>
                <Drawer.Screen name="shoppingCart"/>
            </Drawer>
        </GestureHandlerRootView>
    );
}
