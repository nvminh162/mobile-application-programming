import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import ProductScreen from './components/product';
import ProductChoosenScreen from './components/product-choosen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1
      }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductChoosen"
              component={ProductChoosenScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
