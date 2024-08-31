import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from './BottomTabs';

const AnimationButton = () => (
  <View style={styles.container}>
    <BottomTabs />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    
  },
});

export default AnimationButton;
