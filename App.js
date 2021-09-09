import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/Routes';
import { SimplesProvider } from './src/context/SimplesProvider';

export default function App() {
  return (
    <SimplesProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SimplesProvider>
  );
}
