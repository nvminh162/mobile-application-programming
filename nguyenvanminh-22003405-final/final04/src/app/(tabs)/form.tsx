import { add, update, useAppDispatch, useAppSelector } from "@/utils/store";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function FormScreen() {
  const { id } = useLocalSearchParams();

  const useDispatch = useAppDispatch();
  const navigation = useNavigation();
  const { workouts } = useAppSelector(state => state.workout)

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    duration: 0,
    category: "",
    completed: false,
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.duration || !formData.category) {
      alert("Please input 3 field!")
      return;
    }
    if (id)
      useDispatch(update(formData));
    else
      useDispatch(add(formData));
    router.back();
  };

  useFocusEffect(
    useCallback(() => {
      if (id) {
        const existed = workouts.find(i => i.id === Number(id));
        if (existed) setFormData(existed)
      }

      return () => {
        setFormData({
          id: Date.now(),
          name: "",
          duration: 0,
          category: "",
          completed: false,
        });
        // @ts-ignore
        navigation.setParams({ id: undefined });
      };
    }, [id])
  );

  return (
    <View className="flex-1 m-10">
      <Text className="text-3xl font-bold text-green-500 text-center my-5">
        Traning diary
      </Text>
      <View className="w-full gap-10">
        <View className="gap-5">
          <Text className="text-xl font-bold text-green-500">
            General information
          </Text>
          <TextInput
            label={"Name"}
            value={formData.name}
            onChangeText={(v) => setFormData({ ...formData, name: v })}
          />
          <TextInput
            label={"Duration"}
            keyboardType="numeric"
            value={formData.duration.toLocaleString()}
            onChangeText={(v) =>
              setFormData({ ...formData, duration: parseInt(v) || 0 })
            }
          />
        </View>

        <View className="gap-5">
          <Text className="text-xl font-bold text-green-500">Workout type</Text>
          <RadioButton.Group
            value={formData.category}
            onValueChange={(v) => setFormData({ ...formData, category: v })}
          >
            <RadioButton.Item label="Cardio" value="Cardio" />
            <RadioButton.Item label="Strength" value="Strength" />
            <RadioButton.Item label="Yoga" value="Yoga" />
          </RadioButton.Group>
        </View>
        <Button onPress={handleSubmit} mode="contained">
          Save
        </Button>
      </View>
    </View>
  );
}
