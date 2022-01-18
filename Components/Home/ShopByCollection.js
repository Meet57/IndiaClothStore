import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native'

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ShopByCollection = () => {
    const handlePress = () => {
        Vibration.vibrate(100)
    }

    return (
        <View style={styles.collection}>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211115062923-lo_banner-1.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211115062906-lo_banner-4.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.full} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211115062931-lo_banner-3.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211115062858-lo_banner-2.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211115062914-lo_banner-5.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    collection: {
        padding: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: windowWidth / 2 - 30,
        height: 250,
        margin: 5,
    },
    full:{
        width: windowWidth - 50,
        height: 150,
        margin: 5,
    }
})
