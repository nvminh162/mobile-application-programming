import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
import HomeScreen from './screens/home.screen'
import ProfileScreen from './screens/profile.screen'
import TodoScreen from './screens/todo.screen'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
          <Stack.Screen name="TodoScreen" component={TodoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
