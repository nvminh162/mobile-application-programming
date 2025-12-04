import { authName, useAppDispatch } from "@/features/store";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper"

export default function AuthScreen() {
  const [studentName, setStudentName] = useState("Nguyen Van Minh");

  const useDispatch = useAppDispatch();

  const handleSubmit = () => {
    useDispatch(authName(studentName));
    router.push(`/(tabs)`)
  }

  return (
    <View className="flex-1 justify-center items-center m-10">
        <View className="w-full gap-5">
            <Text className="text-center font-bold text-3xl">Login</Text>
            <TextInput label={"Tên sinh viên"} value={studentName} onChangeText={(v) => setStudentName(v)}/>
            <Button mode="contained" buttonColor="blue" onPress={handleSubmit}>Login</Button>
        </View>
    </View>
  );
}
