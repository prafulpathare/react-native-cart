import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={{
                alignItems:'center'
            }} >
                <Image source={{
                    uri: 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU='
                }} 
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 75
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    marginVertical: 10,
                    fontWeight: '100'
                }}>
                    Praful P
                </Text>
                <Text style={{
                    
                }}>
                    patharepraful@gmail.com
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 100
    },
});

export default ProfileScreen;