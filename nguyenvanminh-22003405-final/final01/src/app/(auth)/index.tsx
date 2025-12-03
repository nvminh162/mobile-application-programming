import { router } from "expo-router";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function AuthScreen() {
  return (
    <View className="flex-1 justify-center items-center m-5">
      <View className="gap-3 w-full">
        <TextInput label={"Student Name"} value="Nguyễn Văn Minh" />
        <TextInput label={"Class"} value="DHKTPM18C" />
        <TextInput label={"Student ID"} value="22003405" />
        <Button mode="contained" buttonColor="blue" onPress={() => router.push("/(tabs)")}>
          Login
        </Button>
      </View>
    </View>
  );
}
