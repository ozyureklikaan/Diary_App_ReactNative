import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
    return (
        <LinearGradient colors={['#ff7e5f', '#feb47b']} start={[1,3]}
        style={{alignItems: 'center'}}>
            <View style={styles.header}>
                <Text style={styles.title}>My Todos</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize:20,
        fontWeight: 'bold',
    }
});