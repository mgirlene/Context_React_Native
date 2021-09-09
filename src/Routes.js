import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Form1 } from './pages/Form1';
import { Form2 } from './pages/Form2';
import { Resumo } from './pages/Resumo';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ Form1 } 
                options={{ 
                    title: "DADOS PESSOAIS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Form2" component={ Form2 } 
                options={{ 
                    title: "DADOS PROFISSIONAIS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Read" component={ Resumo } 
                options={{
                    title: "RESUMO DOS DADOS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
};