import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function MarketplaceDrawer() {
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
