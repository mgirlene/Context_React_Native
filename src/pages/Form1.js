import React, { useContext } from 'react';
import { View, Keyboard } from 'react-native';
import GlobalStyle from '../styles/Global';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';
import SimplesContext from '../context/SimplesProvider';

export function Form1({ navigation }){

    const { nome, setNome, cpf, setCpf, email, setEmail } = useContext(SimplesContext);

    function nextPage() {
        if (nome && cpf && email) {
            Keyboard.dismiss();
            navigation.navigate('Form2');
        }
    }

    return (
        <View style={ GlobalStyle.container }>
            <MyInput placeholder="Nome" value={ nome } onChangeText={ setNome } />
            <MyInput placeholder="CPF" value={ cpf } onChangeText={ setCpf } keyboardType="numeric" />
            <MyInput placeholder="E-mail" value={ email } onChangeText={ setEmail } />

            <MyButton onPress={ () => nextPage() } placeholder="Próximo" />
        </View>
    );
};