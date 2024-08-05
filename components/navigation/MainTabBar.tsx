import React from 'react';
import {View, Icon, Button} from "@/components";
import {Tab} from "@/utils/types/Tab";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useRouter} from "expo-router";
import {TabBarButton} from "./TabBarButton";
import {useThemeColor} from "@/utils/hooks/mobile/useThemeColor";


export function MainTabBar() {
    const tabs: Tab[] = [
        {
            path: '/outfits',
            title: 'Outfits',
            activeIcon: 'shirt',
            inactiveIcon: 'shirt-outline',
        },
        {
            path: '/gallery',
            title: 'Gallery',
            activeIcon: 'layers',
            inactiveIcon: 'layers-outline',
        },
        {
            path: '/marketplace',
            title: 'Market',
            activeIcon: 'storefront',
            inactiveIcon: 'storefront-outline',
        },
        {
            path: '/profile',
            title: 'Profile',
            activeIcon: 'account',
            inactiveIcon: 'account-outline',
        },
    ];
    const router = useRouter()
    const [active, setActive] = React.useState<string | null>(tabs[tabs.length-1].title);
    const {bottom} = useSafeAreaInsets()
    const backgroundColor = useThemeColor({}, 'background')

    const handlePress = (tab: Tab) => {
        setActive(tab.title)
        router.navigate(tab.path)
    }

    const AddButton = () => {
        return (
            <Button
                style={styles.addButton}
            >
                <Icon
                    name={'add'}
                    size={40}
                />
            </Button>
        )
    }

    const TabButton = ({tab}: {tab: Tab}) => {
        return (
            <TabBarButton
                tab={tab}
                style={styles.tabButton}
                handlePress={()=>{
                    handlePress(tab)
                }}
                active={active == tab.title}
            />
        )
    }

    return (
        <View style={[styles.tabBar, {paddingBottom:bottom, backgroundColor}]}>
            <View style={styles.tabsContainer}>
                {tabs.slice(0,tabs.length/2).map((tab, index) => (
                   <TabButton tab={tab} key={index}/>
                ))}
                <View style={styles.addButtonContainer}>
                    <AddButton/>
                </View>
                {tabs.slice(tabs.length/2).map((tab, index) => (
                    <TabButton tab={tab} key={index}/>
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
        height: 70,
    },
    tabsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
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
    },
    addButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 25,
    },
    addButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        paddingBottom: 10,
    }
})

