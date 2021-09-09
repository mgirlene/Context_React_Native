import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MyData(props) {
    return(
        <View style={ styles.viewTxt }>
            <Text style={ styles.txtLabel }>{ props.label }:</Text>
            <Text style={ styles.txtValue }>{ props.value }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewTxt: {
        width: '90%',
        height: 45,
        padding: 3,
        margin: 15,
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#31e4',
        backgroundColor: '#fff',
    },
    txtLabel: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 3,
        fontWeight: 'bold',
    },
    txtValue: {
        fontSize: 16,
        marginRight: 3,
        flex: 1,
        flexWrap: 'wrap'
    },
});