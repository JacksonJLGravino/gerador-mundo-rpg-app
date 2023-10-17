import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../misc/colors";
import BorderlessButton from "../BorderlessButton";

export default function TextRandom({ text, onPress, title }) {
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <BorderlessButton size={20} btnName="dice" onPress={onPress} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 4,
  },
  headerText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.DARK,
  },
  text: {
    color: colors.DARK,
  },
});
