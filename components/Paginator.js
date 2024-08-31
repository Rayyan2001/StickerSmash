import {
  View,
  Text,
  Animated,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import HomePage from "./HomePage";
import { useNavigation } from "@react-navigation/native";
import AnimationButton from "./AnimationButton";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation(); //
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", justifyContent: "center", height: 64 }}
      >
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });

          const opacityDot = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth, opacity: opacityDot }]}
              key={i.toString()}
            />
          );
        })}
      </View>

      <View style={styles.skipContainer}>
        <TouchableOpacity style={styles.skip}>
          <Text
            style={styles.skipText}
            onPress={() => navigation.navigate("HomePage")}
          >
            Skip {"-->"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.skipContain}>
        <TouchableOpacity style={styles.skip}>
          <Text
            style={styles.skipToAnimation}
            onPress={() => navigation.navigate("AnimationButton")}
          >
            Skip to Animation Page 
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },

  skipContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  skipContain: {
    position:"absolute",
    bottom: 100,
    right: 100,
   
  },

  skip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  skipText: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
  },

  skipToAnimation: {
 textDecorationLine: "underline",
 fontWeight: "bold"
  }
});
