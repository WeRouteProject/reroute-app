import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Index';
import {AuthProvider} from './src/Context/AuthProvider';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation style={styles.main} />
        </AuthProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
