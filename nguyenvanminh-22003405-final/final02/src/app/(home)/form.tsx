import { add, update, useAppDispatch } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FormScreen() {
  const { id } = useLocalSearchParams();

  const { POST, PUT, GET } = useFetch();
  const useDispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    bought: false,
    quantity: 0,
    created_at: new Date().toString(),
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.category || !formData.quantity) {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }

    if(id) PUT(`/grocery/${id}`, formData).then(() => useDispatch(update(formData)));
    else POST(`/grocery`, formData).then(() => useDispatch(add(formData)));

    router.back();
  };

  useFocusEffect(
    useCallback(() => {
      if(id) {
        GET(`/grocery/${id}`).then(res => setFormData(res))
      }
    }, [id])
  )

  return (
    <View className="flex-1 justify-center items-center m-10">
      <Text className="font-bold text-2xl mb-5">Thông tin hàng cần mua</Text>
      <View className="w-full gap-5">
        <TextInput
          label={"Name"}
          value={formData.name}
          onChangeText={(value) => setFormData({ ...formData, name: value })}
        />
        <TextInput
          label={"Category"}
          value={formData.category}
          onChangeText={(value) =>
            setFormData({ ...formData, category: value })
          }
        />
        <TextInput
          label={"Quantity"}
          keyboardType="numeric"
          value={formData.quantity.toString()}
          onChangeText={(value) =>
            setFormData({ ...formData, quantity: parseInt(value) || 0 })
          }
        />

        <Button disabled={!formData.name || !formData.category || !formData.quantity} mode="contained" buttonColor="blue" onPress={handleSubmit}>
          Save
        </Button>
        <Button
          mode="contained"
          buttonColor="black"
          textColor="white"
          onPress={() => router.back()}
        >
          Back
        </Button>
      </View>
    </View>
  );
}
