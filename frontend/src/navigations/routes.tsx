import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginContainer from "@screens/LoginScreen";
import ChatContainer from "@screens/ChatSreen";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const Stack = createStackNavigator();

function Routes() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginContainer} />
    </Stack.Navigator>
  );
}

function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatScreen" component={ChatContainer} />
    </Stack.Navigator>
  );
}

export { Routes };
