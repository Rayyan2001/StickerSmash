import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/Onboarding";
import HomePage from "./components/HomePage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationButton from "./components/AnimationButton";
import hello from "./hello";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={false}>
        <Stack.Screen name="Onboarding" component={Onboarding} screenOptions={false}/>
        <Stack.Screen name="HomePage" component={HomePage} screenOptions={false}/>
        <Stack.Screen name="AnimationButton" component={AnimationButton} screenOptions={false}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
