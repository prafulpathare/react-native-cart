
import React, { useEffect, useState, Node, setState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/Cart";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import { Image, StyleSheet, Text, View } from 'react-native';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "#ffffffff",
                    borderTopEndRadius: 15,
                    borderTopStartRadius: 15,
                    height: 55,
                    borderTopColor: 'transparent'
                    // ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: focused ? 24 : 21,
                                    height: focused ? 24 : 21,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                
                options={{
                    tabBarVisible: false,                
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: focused ? 24 : 21,
                                    height: focused ? 24 : 21,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                        <Image
                            source={require('../assets/icons/cart.png')}
                            resizeMode='contain'
                            style={{

                                width: focused ? 24 : 21,
                                height: focused ? 24 : 21,
                                tintColor: focused ? '#2981e6' : '#748c94'
                            }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                        <Image
                            source={require('../assets/icons/user.png')}
                            resizeMode='contain'
                            style={{
                                width: focused ? 24 : 21,
                                height: focused ? 24 : 21,
                                tintColor: focused ? '#2981e6' : '#748c94'
                            }}
                        />
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;