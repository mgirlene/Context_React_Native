import React, { useContext } from 'react';
import { View } from 'react-native';
import GlobalStyle from '../styles/Global';
import { MyData } from '../components/MyData';
import SimplesContext from '../context/SimplesProvider';

export function Resumo() {

    const { nome, cpf, email, escolaridade, idioma, experiencia } = useContext(SimplesContext);

    return (
        <View style={ GlobalStyle.container }>           
            <MyData label="NOME" value={ nome } />
            <MyData label="CPF" value={ cpf } />
            <MyData label="EMAIL" value={ email } />
            <MyData label="ESCOLARIDADE" value={ escolaridade } />
            <MyData label="IDIOMAS" value={ idioma } />
            <MyData label="EXPERIÊNCIA" value={ experiencia } />
        </View>
    );
};