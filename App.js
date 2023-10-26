import { StatusBar } from "react-native";
import colors from "./src/misc/colors";
import Routes from "./src/routes";
import "expo-dev-client";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.DARK} />
      <Routes />
    </>
  );
}
