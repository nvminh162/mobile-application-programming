import { Tabs } from "expo-router";
import { View } from "react-native";
import { Icon } from "react-native-paper";

export default function TabsLayout() {
  return (
    <View className="flex-1">
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "red" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={24} source={"home"}></Icon>
            ),
          }}
        />
        <Tabs.Screen
          name="form"
          options={{
            title: "Form",
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={24} source={"form-select"}></Icon>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
