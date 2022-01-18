import React from 'react'
import { StyleSheet, Image, Text, View, FlatList } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SlidingImages = () => {


    const DATA = [
        {
            id: 1,
            url: 'https://d101ghsnt3o063.cloudfront.net/images/bannerimages/20210521074038-eid-80off-mobile-in.jpg'
        },
        {
            id: 2,
            url: 'https://i.picsum.photos/id/250/900/400.jpg?hmac=d480w5zvhBYE0f8-geqnZOT9R4xayMx3WazrZl52Pow'
        },
        {
            id: 3,
            url: 'https://i.picsum.photos/id/910/900/400.jpg?hmac=c8kqdu2_iRZ-jooItFSKCsfhn_NMQEqJApDbVVuJs_Q'
        },
        {
            id: 4,
            url: 'https://i.picsum.photos/id/542/900/400.jpg?hmac=AhWe7OZWPYLok2FARjRKmGD-k1J69e9-Ly6mY9VjYtc'
        }
    ]

    const renderItem = ({ item }) => (
        <View style={{
            width: windowWidth
        }}>
            <Image
                style={styles.image}
                source={{ uri: item.url }}
            />
            <Text>{item.id}</Text>
        </View>
    );

    return (
        <FlatList
            style={styles.bannerView}
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    bannerView: {
        height: 150,
        backgroundColor: 'grey'
    },
    banner: {

    },
    image: {
        width: '100%',
        height: '100%'
    }
});
