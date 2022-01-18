import React from 'react'
import { Image, StyleSheet, Vibration, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CollectionBox = () => {

    const handlePress = () => {
        Vibration.vibrate(100)
    }

    return (
        <View style={styles.collection}>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211029031334-top-offer-1.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211029031343-top-offer-2.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211029031354-top-offer-3.jpg' }} resizeMode='cover' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20211029031406-top-offer-4.jpg' }} resizeMode='cover' />
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
        height: 65,
        margin: 5,
        
    }
})
