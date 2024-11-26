import React from 'react';
import {StyleSheet} from 'react-native';
import {NavagationProvider} from './src/Navagation/NavagationProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {makeStore} from './src/store';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Provider store={makeStore}>
        <NavagationProvider />
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
