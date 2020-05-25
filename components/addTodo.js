import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <Text style={{color:"#ff7e5f", fontWeight: "bold", textAlign: "center", fontSize: 20}}>ADD NEW TO DO</Text>
            <TextInput 
            style={styles.input}
                placeholder='new todo..'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='#FFBFBB'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 50,
        marginTop:30,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})