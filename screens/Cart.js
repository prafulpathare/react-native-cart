import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const CartScreen = ({ navigation }) => {
    return (
        <View style={ styles.mainContainer }>
            <Text>Cart</Text>
            <Button title="Place Order" onPress={() => alert('Order Placed')} />
        </View>
    )
}


const styles = StyleSheet.create({
   mainContainer : {
       flex: 1
   }
});

export default CartScreen;