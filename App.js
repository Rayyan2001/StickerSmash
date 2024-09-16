import { StyleSheet } from "react-native";
import Onboarding from "./components/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AnimationButton from "./components/AnimationButton";
import PayPal from './components/payment/PayPal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="AnimationButton"
          component={AnimationButton}
        />
       
        {/* <Stack.Screen name="PayPal" component={PayPal} /> */}
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
