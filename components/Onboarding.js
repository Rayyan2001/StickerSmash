import { FlatList, StyleSheet, Text, View, Animated } from "react-native";
import React, {useRef, useState} from "react";
import OnboardingItem from "../components/OnboardingItem";
import slides from "../slides";

export default Onboarding = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces= {false}
        keyExtractor={(item) => item.id}
        // onScroll={Animated.event([{nativeEffect: {contentOffset: {x: scrollX}}}],{
        //     useNativeDriver: false,
        // })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
