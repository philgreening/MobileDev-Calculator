import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,
         Dimensions, SafeAreaView,
         TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
