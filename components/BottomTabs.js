import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import HomePage from './HomePage';
// Create Tab Navigator
const Tab = createBottomTabNavigator();

// Define Screen Components
const CropScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Crop Screen</Text>
  </View>
);

const NextScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Next Screen</Text>
  </View>
);

const BackScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Back Screen</Text>
  </View>
);

// Define Bottom Tabs Component
const BottomTabs = () => {
  const navigation = useNavigation(); // Get navigation object using hook

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => {
          console.log('Back button pressed');
          // Navigate to BackScreen
          navigation.navigate('HomePage');
        }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log('Forward button pressed');
          // Navigate to NextScreen
          navigation.navigate('HomePage');
        }}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#000000' },
          tabBarShowLabel: true,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Crop"
          component={CropScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="crop" size={24} color={focused ? "green" : "white"} />,
          }}
        />
        <Tab.Screen
          name="Tick"
          component={BackScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="checkmark-outline" size={24} color={focused ? "green" : "white"} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#000000',
    borderBottomWidth: 0.3, // Thickness of the white line
    borderBottomColor: '#FFFFFF', // Color of the white line
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#000000', // Set screen background color to black
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "#fff",
  },
});

export default BottomTabs;

