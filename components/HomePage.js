// HomePage.js
import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import hello from "../hello";
import { useNavigation } from "@react-navigation/native";

export default HomePage = () => {
  const navigation = useNavigation(); //
  const { width } = useWindowDimensions();
  const items = hello[0];
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={items.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.description}>{items.description}</Text>
      </View>

      <View style={styles.prevContainer}>
        <TouchableOpacity style={styles.prev}>
          <Text
            style={styles.prevText}
            onPress={() => navigation.navigate("Onboarding")}
          >
            Previous
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },

  image: {
    flex: 0.7,
    justifyContent: "center",
  },

  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "#493d8a",
  },

  description: {
    fontWeight: "200",
    paddingHorizontal: 64,
    textAlign: "center",
    color: "#62656b",
    marginBottom: 20,
  },
  prevContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  prev: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  prevText: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
});
