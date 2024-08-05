import React from 'react';
import {View, Icon, Button} from "@/components";
import {Tab} from "@/utils/types/Tab";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useRouter} from "expo-router";
import TabBarButton from "@/components/navigation/TabBarButton";


export function TabBar() {
    const tabs: Tab[] = [
        {
            name: '/(tabs)',
            title: 'Home',
            activeIcon: 'home',
            inactiveIcon: 'home-outline',
        },
        {
            // for some reason giving error but it works
            //@ts-ignore
            name: '/outfits',
            title: 'Outfits',
            activeIcon: 'shirt',
            inactiveIcon: 'shirt-outline',
        },
        {
            name: '/gallery',
            title: 'Gallery',
            activeIcon: 'layers',
            inactiveIcon: 'layers-outline',
        },
        {
            name: '/marketplace',
            title: 'Market',
            activeIcon: 'storefront',
            inactiveIcon: 'storefront-outline',
        }
    ];
    const [active, setActive] = React.useState<string | null>(tabs[0].name.toString());
    const insets = useSafeAreaInsets()
    const router = useRouter()

    const handlePress = (tab: Tab) => {
        setActive(tab.name.toString())
        router.push(tab.name)
    }

    const AddButton = () => {
        return (
            <Button
                style={styles.tabButton}
            >
                <Icon
                    name={'add'}
                />
            </Button>
        )
    }

    return (
        <View style={[styles.tabBar, {bottom:insets.bottom}]}>
            <View style={styles.tabsContainer}>
                {tabs.slice(0,tabs.length/2).map((tab, index) => (
                    <TabBarButton
                        tab={tab}
                        style={styles.tabButton}
                        handlePress={()=>{
                            handlePress(tab)
                        }}
                        active={active == tab.name}  key={index}/>
                ))}
                <AddButton/>
                {tabs.slice(tabs.length/2).map((tab, index) => (
                    <TabBarButton
                        tab={tab}
                        style={styles.tabButton}
                        handlePress={()=>{
                            handlePress(tab)
                        }}
                        active={active == tab.name}  key={index}/>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    tabsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    tabButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: 50,
        backgroundColor: 'transparent',
        borderWidth: 0,
    }
})

