import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const ProductScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

            <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                <Image source={require('../assets/icons/backArrow.png')} style={{
                    width: 24, height: 24, margin: 15
                }} />
            </TouchableOpacity>
                <Text style={{ height: 24, marginVertical: 15 }}>Product name</Text>
            </View>
                <ImageBackground resizeMode='contain'
                    source={{
                        uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'
                    }}
                    style={{
                        height: 400,
                        backgroundColor: '#fff'
                    }}
                />

            <View style={{
                padding: 10,
                backgroundColor: '#fff',
                marginTop: 3
            }}>
                <Text>Product name</Text>
            </View>


        </View>
    )
}
const MainSearchScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <Text>List of Products</Text>
            <Button title='View Product' onPress={() => navigation.navigate('Product')} />
        </View>
    )
}


const SearchScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={MainSearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Product" component={ProductScreen} options={{
                headerShown: false

            }} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 50
    },
});

export default SearchScreen;