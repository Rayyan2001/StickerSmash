import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const AnimationButton = () => {
  const navigation = useNavigation(); // Use navigation to navigate between screens

  useEffect(() => {
    navigation.navigate("BottomTabs"); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading BottomTabs...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default AnimationButton;
