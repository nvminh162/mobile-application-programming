import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Screen 01",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="select-color" 
        options={{ 
          title: "Screen 02",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="product-detail" 
        options={{ 
          title: "Screen 04",
          headerShown: true,
        }} 
      />
    </Stack>
  );
}
