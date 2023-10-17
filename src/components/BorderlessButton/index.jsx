import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BorderlessButton({ onPress, btnName, color, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome5 name={btnName} size={size} color={color} />
    </TouchableOpacity>
  );
}
