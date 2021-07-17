import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const SearchScreen = ({ navigation }) => {
    return (
        <View style={ styles.mainContainer }>
            <Text>Cart</Text>
            <Button title="Place Order" onPress={() => alert('Order Placed')} />
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 50
    },
});

export default SearchScreen;