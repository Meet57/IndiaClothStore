import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CategoryBox } from './CategoryBox';
import { CollectionBox } from './CollectionBox';
import { Navigation } from './Navigation';
import { OfferBanner } from './OfferBanner';
import { ShopByCollection } from './ShopByCollection';
import { SlidingImages } from './SlidingImages';
import { Testimonials } from './Testimonials';

export const Home = () => {
    return (
        <View>
            <View>
                <Navigation />
            </View>
            <ScrollView style={{ marginBottom: 175 }}>
                <OfferBanner />
                <SlidingImages />
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 10
                }}>Shop By Category</Text>
                <CategoryBox />
                <CollectionBox />
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 10
                }}>Shop By Collection</Text>
                <ShopByCollection />
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 10
                }}>Why We ?</Text>
                <Testimonials />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
});
