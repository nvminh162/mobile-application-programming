import { add, update, useAppDispatch } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router, useFocusEffect, useLocalSearchParams, useNavigation } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function FormScreen() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    isDone: false,
  });

  const { id } = useLocalSearchParams();

  const { GET, PUT, POST } = useFetch();

  const useDispatch = useAppDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if(id) {
        GET(`/todos/${id}`).then(res => setFormData(res));
      }

      return () => {
        setFormData({
          id: "",
          title: "",
          content: "",
          isDone: false
        });
        (navigation as any).setParams({ id: undefined });
      }
    }, [id])
  );

  const handleSubmit = () => {
    if (id)
      PUT(`/todos/${id}`, formData).then(() => useDispatch(update(formData)))
    else POST(`/todos`, formData).then(() => useDispatch(add(formData)));

    setFormData({
      id: "",
      title: "",
      content: "",
      isDone: false
    })
    router.push("/(tabs)")
  }

  return (
    <View className="flex-1 justify-center items-center m-5">
      <View className="w-full gap-5">
        <Text>Thông tin chung</Text>
        <TextInput
          label={"Title"}
          value={formData.title}
          onChangeText={(value) => setFormData({ ...formData, title: value })}
        />
        <TextInput
          label={"Content"}
          value={formData.content}
          onChangeText={(value) => setFormData({ ...formData, content: value })}
        />
        <Text>Status</Text>
        <RadioButton.Group
          value={formData.isDone ? "1" : "0"}
          onValueChange={value => setFormData({...formData, isDone: value === "1"})}
        >
          <RadioButton.Item label="Completed" value="1" />
          <RadioButton.Item label="No completed" value="0" />
        </RadioButton.Group>

        <Button disabled={!formData.title.trim() || !formData.content.trim()} mode="contained" buttonColor="blue" textColor="white" onPress={handleSubmit}>Save</Button>
      </View>
    </View>
  );
}
