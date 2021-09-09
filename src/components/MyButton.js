import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function MyButton(props) {
    return (
        <TouchableOpacity onPress={ props.onPress } style={ styles.btn }>
            <Text style={ styles.txt }>{ props.placeholder }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 40,
        width: '70%',
        margin: 25,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#31e4',
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});