import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const Testimonials = () => {

    return (
        <View style={styles.testimonials}>
            <View style={styles.Box}>
                <Text style={styles.title}>Exclusive Collection</Text>
                <Text style={styles.body}>7000+ unique designer Suits & Sarees, Lehenga gives glamorous touch.</Text>
            </View>
            <View style={styles.Box}>
                <Text style={styles.title}>Perfect Customizations</Text>
                <Text style={styles.body}>Experience team of fashion designer to ensure best fitting and finishing.</Text>
            </View>
            <View style={styles.Box}>
                <Text style={styles.title}>Secure Payment</Text>
                <Text style={styles.body}>Secured payment method via Secure Socket Layer(SSL) Technology and PayPal.</Text>
            </View>
            <View style={styles.Box}>
                <Text style={styles.title}>Easy Returns</Text>
                <Text style={styles.body}>We have 7 days easy return. Read return policy.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    testimonials: {
        padding: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    Box: {
        width: (windowWidth / 2) - 30,
        margin: 5,
        borderWidth: 1,
        borderColor: `#25283D`,
        borderRadius: 3
    },
    title: {
        backgroundColor: 'lightslategrey',
        color: 'white',
        paddingHorizontal: '7%',
        paddingVertical: '3%',
        fontWeight: 'bold',
        fontSize: 18
    },
    body: {
        fontWeight: '100',
        fontSize: 12,
        paddingHorizontal: '7%',
        paddingVertical: '3%',
    }
})