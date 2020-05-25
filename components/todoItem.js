import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export default function TodoItem({item, pressHandler}) {
    return (
        <View style={{flexDirection: "row"}}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.itemDelete}>✓</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 14,
        borderColor: '#ffece8',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#fff',
        fontSize: 15,
        flex:10
    },
    itemDelete:{
        padding: 16,
        textAlign: "center",
        marginTop: 14,
        borderColor: '#ffece8',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#fff',
        flex:1,
        color: "green",
        fontSize: 15,
        textAlignVertical: "center",
        fontWeight: "bold"
    }
});