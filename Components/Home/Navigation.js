import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Navigation = () => {
    return (
        <View style={styles.navigation}>
            <View style={styles.tags}>
                <Image style={styles.square} source={{ uri: 'https://img.icons8.com/material-outlined/344/menu--v1.png'}}/>
                <Image style={styles.logo} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/mobile/images/logo.png' }} />
            </View>
            <View style={styles.tags}>
                <Image style={styles.square} source={{ uri: 'https://img.icons8.com/ios-glyphs/344/search.png' }} />
                <Image style={styles.square} source={{ uri: 'https://img.icons8.com/material-outlined/344/like--v1.png' }} />
                <Image style={styles.square} source={{ uri: 'https://img.icons8.com/material-two-tone/344/shopping-cart--v1.png' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 35,
        width: 102
    },
    navigation: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        paddingBottom: 10,

    },
    square:{
        height:30,
        width: 30,
        marginRight: 5
    },
    tags:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})