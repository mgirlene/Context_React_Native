import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function MyInput(props) {
    return (
        <TextInput
            style={ styles.input }
            placeholder={ props.placeholder }
            placeholderTextColor={ '#B0b0b0' }
            onChangeText={ props.onChangeText }
            value={ props.value }
            { ...props }
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 20,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#31e4',
        backgroundColor: '#fff',
    },
});