import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const OfferBanner = () => {
    const data = [
        'Buy One, Get One',
        'Buy Three, Get Two',
        'Shop Above 2000, 500 Off',
        'Flat 80% Off'
    ]

    const [offertext, setOffertext] = useState(data[0])

    useEffect(() => {
        var flag = 1
        const interval = setInterval(() => {
            flag = (flag+1)% data.length
            setOffertext(data[flag])
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={styles.box}>
            <Text style={styles.text}>
                {offertext}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25
    },
    text: {
        color: 'grey',
    }
})