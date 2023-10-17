import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import WorldDetails from "../pages/WorldDetails";
import { NavigationContainer } from "@react-navigation/native";
import WorldProvider from "../contexts/WorldProvider";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <WorldProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WorldDetails" component={WorldDetails} />
        </Stack.Navigator>
      </WorldProvider>
    </NavigationContainer>
  );
}
