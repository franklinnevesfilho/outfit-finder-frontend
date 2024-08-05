import {StyleSheet} from "react-native";
import {View,  Icon, Button} from "@/components";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export function DrawerHeader({navigation}:{
    navigation: DrawerNavigationProp<any>
}) {
   const {top} = useSafeAreaInsets()

    return (
        <View style={[styles.container, {paddingTop: top}]}>
            <Button
                feedback={'opacity'}
                defaultStyle={false}
                onPress={()=>{
                    navigation.toggleDrawer()
                }}
            >
                <Icon name={'menu'} size={35}/>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
    },
});


