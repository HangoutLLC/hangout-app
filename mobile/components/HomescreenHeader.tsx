import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomescreenHeader() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Image
                source={require('../assets/images/favicon.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
})