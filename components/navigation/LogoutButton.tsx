import { Text, StyleSheet} from 'react-native'
import React from 'react'
import {Button, Icon} from "@/components";
import {IconName} from "@/components/themedComponents/Icon";

export default function LogoutButton() {
    const [iconName, setName] = React.useState<IconName>('exit-outline')
    const [backgroundColor, setBackground] = React.useState<string>('transparent')
    const onPressBackground = '#ff272'

    const onPressIn = () => {
        setName('exit')
        setBackground(onPressBackground)
    }

    const onPressOut = () => {
        setName('exit-outline')
        setBackground('transparent')
    }


    return (
        <Button
            style={[styles.logoutButton, {backgroundColor}]}
            defaultStyle={false}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
                <Icon name={iconName}/>
                <Text>Logout</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    logoutButton: {
        flex: 1,
        minHeight: 50,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
