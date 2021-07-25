import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();


const Header = ({ children, title }): Node => {
    const searchPlaceholder = "Search...";

    return (
        <View style={{
            position: 'relative',
            margin: 10,
            borderRadius: 10, backgroundColor: '#ddd'
        }}>
            <Image source={require('../assets/icons/search.png')} style={{
                position: 'absolute',
                width: 22, height: 22,
                top: 13, left: 20,
                zIndex: 4444, tintColor: '#555'
            }} />

            <TextInput
                style={{
                    paddingLeft: 60
                }}
                placeholder={searchPlaceholder}
                underlineColorAndroid="transparent"
            />
        </View>


    );
};

const ProductScreen = ({ route, navigation }) => {

    const { productId } = route.params;

    return (
        <View style={styles.mainContainer, {marginTop: 0}}>

            <ScrollView >

                <Text style={{}}>{JSON.stringify(productId)}</Text>
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
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>

            </ScrollView>
            {/* add to cart & buy now button  */}
            <View style={{
                position: 'absolute', flexDirection: 'row', flexWrap: 'wrap',
                bottom: 0, left: 0, right: 0
            }}>
                <TouchableOpacity onPress={() => alert('Added to Cart.')} style={styles.cartButton} >
                    <Text style={styles.cartButtonText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Brought now.')} style={styles.cartButton} >
                    <Text style={styles.cartButtonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
            {/* -- add to cart & buy now button  */}
        </View>
    )
}
const MainSearchScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>

            <Header />

            <Text>List of Products</Text>
            <Button title='View Product' onPress={() => {
                navigation.navigate('Product', {
                    productId: 15031998
                })
            }} />
        </View>
    )
}


const SearchScreen = ({ navigation, route }) => {

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        navigation.setOptions({ tabBarVisible: routeName === "Product" ? false : true });
    }, [navigation, route]);

    return (
        <Stack.Navigator 
            initialRouteName="Search">
            <Stack.Screen name="Search" component={MainSearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="Product" component={ProductScreen} options={{
            }} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 50
    },

    cartButton: {
        flex: 1, backgroundColor: '#2981e6',
        paddingVertical: 12, alignItems: 'center',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    cartButtonText: {
        color: '#ffffff',
        fontWeight: '700'
    }
});

export default SearchScreen;