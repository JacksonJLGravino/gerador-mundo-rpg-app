import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BtnRound({
  onPress,
  btnName,
  colorInside,
  backgroundColor,
}) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: backgroundColor }, styles.button]}
      onPress={onPress}>
      <FontAwesome5 name={btnName} size={28} color={colorInside} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
