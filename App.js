import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import Onboarding from './components/Onboarding';
import SplashScreen from 'react-native-splash-screen';


export default function App() {


  return (
    <View style={styles.container}>
      <Onboarding/>
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
