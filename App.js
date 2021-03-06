import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="main-text">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity testID="main-button">
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
