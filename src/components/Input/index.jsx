import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../misc/colors";

export default function Input({
  placeholder,
  onChangeText,
  value,
  numberOfLines,
  textAlignVertical,
}) {
  return (
    <TextInput
      value={value}
      multiline
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      textAlignVertical={textAlignVertical}
      maxFontSizeMultiplier={8}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 200,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.LIGHT,
    borderColor: colors.ORANGE_100,
    color: colors.DARK,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
