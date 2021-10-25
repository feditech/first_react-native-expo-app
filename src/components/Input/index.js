import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Input() {

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Login as</Text>
            <StatusBar style="auto" />
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 140,
        backgroundColor: 'red'
    },
    head: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

