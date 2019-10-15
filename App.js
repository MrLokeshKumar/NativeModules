import React from 'react';
import {StyleSheet, View, Text, NativeModules} from 'react-native';
import ToastExample from './ToastExample';

const App = () => {
  ToastExample.show('Awesome', ToastExample.SHORT);
  return (
    <View style={styles.mainContainer}>
      <Text>Native ToastMsg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
