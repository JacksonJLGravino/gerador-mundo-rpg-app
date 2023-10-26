import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import colors from "../../misc/colors";

export default function World({ item, onPress }) {
  const { worldName, worldDescription } = item;
  return (
    <TouchableOpacity onPress={onPress}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{worldName}</Text>
        <Text style={styles.desc}>{worldDescription}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
}

const width = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: 150,
    padding: 8,
    backgroundColor: colors.LIGHT,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.GREEN_200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.ORANGE_100,
  },
  desc: {
    color: colors.DARK,
  },
});
