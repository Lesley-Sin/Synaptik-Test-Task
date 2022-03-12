import React from 'react';
import onAppStart from './scr/AppStart/onAppStart';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './scr/Navigation/RootNavigator';
import { NativeBaseProvider } from 'native-base';
import { ModalView } from './scr/Components/ModalView';

const App = () => {
  const dependencies = onAppStart();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ModalView deps={dependencies} />
        <RootNavigator deps={dependencies} />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
