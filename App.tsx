import React from 'react';

import AppInner from './AppInner'; // 400 Error 및 성공 toast message 띄워주기 라이버르리
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppInner />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default App;
