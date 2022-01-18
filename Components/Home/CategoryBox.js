import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'

export const CategoryBox = () => {

    const catodata = [
        {
            id: 1,
            img: 'https://picsum.photos/300',
            title: 'Salvar Kamez'
        },
        {
            id: 2,
            img: 'https://picsum.photos/300',
            title: 'Summer wear'
        },
        {
            id: 3,
            img: 'https://picsum.photos/300',
            title: 'Winter Wear'
        },
        {
            id: 4,
            img: 'https://picsum.photos/300',
            title: 'Jackets'
        },
        {
            id: 5,
            img: 'https://picsum.photos/300',
            title: 'Traditionals'
        },
        {
            id: 6,
            img: 'https://picsum.photos/300',
            title: 'Lengha'
        },
        {
            id: 7,
            img: 'https://picsum.photos/300',
            title: 'Pathani'
        },
    ]

    const showToast = (id) => {
        ToastAndroid.show(id, ToastAndroid.SHORT);
    };

    const CircleCat = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { showToast(item.title) }} style={{
                marginVertical: 10,
                marginHorizontal: 8,
                alignItems: 'center'
            }}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: item.img }}
                />
                <Text style={{
                    marginTop: 10,
                }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            style={styles.box}
            data={catodata}
            horizontal={true}
            renderItem={CircleCat}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    box: {
        margin: 15,
        padding: 3,
        borderWidth: 3,
        borderColor: 'grey',
        height: 130,
        borderRadius: 15,
    },
    tinyLogo: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: 'orange',
        borderWidth: 2,
        alignItems: 'center',
    }
});