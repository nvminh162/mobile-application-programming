import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [formData, setFormData] = useState({
    name: "Nguyễn Văn Minh",
    class: "DHKTPM18C",
    studentId: "22003405",
  });

  return (
    <View className="flex-1 m-10">
      <Text className="text-center font-bold my-10 text-2xl">
        Training Diary
      </Text>
      <View className="w-full m-auto gap-5">
        <TextInput
          label={"Họ tên"}
          value={formData.name}
          onChangeText={(v) => setFormData({ ...formData, name: v })}
        />
        <TextInput
          label={"Lớp"}
          value={formData.class}
          onChangeText={(v) => setFormData({ ...formData, class: v })}
        />
        <TextInput
          label={"Mã số SV"}
          value={formData.studentId}
          onChangeText={(v) => setFormData({ ...formData, studentId: v })}
        />

        <Button
          onPress={() =>
            router.push("/(tabs)")
          }
          mode="contained"
          buttonColor="red"
        >
          Đăng nhập
        </Button>
      </View>
    </View>
  );
}
