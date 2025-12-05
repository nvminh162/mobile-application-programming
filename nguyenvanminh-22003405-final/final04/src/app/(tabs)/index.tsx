import WorkoutItem from "@/components/WorkoutItem";
import { useAppSelector } from "@/utils/store";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import {
  SegmentedButtons,
  TextInput,
} from "react-native-paper";

export default function HomeScreen() {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const { workouts } = useAppSelector((state) => state.workout);

  const filterItems = useMemo(() => {
    return workouts
      .filter(i => i.name.toLowerCase().includes(searchName.toLowerCase()))
      .filter(i => i.category.toLowerCase().includes(searchCategory.toLowerCase()))
  }, [searchName, searchCategory, workouts])

  return (
    <View className="flex-1 m-10 gap-5">
      <Text>Traing Diary</Text>

      <View className="gap-5">
        <Text>Filter</Text>
        <TextInput
          label={"Tìm kiếm theo tên"}
          value={searchName}
          onChangeText={(v) => setSearchName(v)}
        />
        <SegmentedButtons
          value={searchCategory}
          onValueChange={(v) => setSearchCategory(v)}
          buttons={[
            { label: "All", value: "" },
            { label: "Cardio", value: "Cardio" },
            { label: "Strength", value: "Strength" },
            { label: "Yoga", value: "Yoga" },
          ]}
        />
      </View>
      <FlatList
        data={filterItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WorkoutItem data={item} />}
        ListEmptyComponent={<Text className="text-center mt-10 text-red-500">Empty</Text>}
      />
    </View>
  );
}
