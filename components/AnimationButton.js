import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.25, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 0.8, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log(`${item.route} button pressed`);
        onPress();
      }}
      activeOpacity={1}
    >
      <Animatable.View
        animation="zoomIn"
        duration={1000}
        style={styles.container}
        ref={viewRef}
      >
        <Ionicons
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={
            focused
              ? styles.pri_color.backgroundColor
              : styles.sec_color.backgroundColor
          }
          size={24}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

// Define AnimationButton before referencing it
const AnimationButton = () => {
  return (
    <Animatable.View style={{color: "#000000"}}>
     
    </Animatable.View>
  );
};

const TabArr = [
  {
    route: "Crop",
    label: "Crop",
    type: Ionicons,
    activeIcon: "crop", // Ionicons "crop" icon
    inActiveIcon: "crop-outline", // Ionicons "crop-outline" for inactive state
    component: AnimationButton,
  },
  {
    route: "Tick",
    label: "Tick",
    type: Ionicons,
    activeIcon: "checkmark", // Ionicons "checkmark" icon
    inActiveIcon: "checkmark-outline", // Ionicons "checkmark-outline" for inactive state
    component: AnimationButton,
  },
];

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: true,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pri_color: {
    backgroundColor: "green",
  },
  sec_color: {
    backgroundColor: "blue",
  },
});
