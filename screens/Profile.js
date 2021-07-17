import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Profile</Text>
            <Button title="Profile Click" onPress={() => alert('Profile Button Clicked')} />
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default ProfileScreen;