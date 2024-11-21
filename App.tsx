import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavagationProvider} from './src/Navagation/NavagationProvider';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavagationProvider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
