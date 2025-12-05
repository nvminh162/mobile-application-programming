import { remove, update, useAppDispatch } from "@/utils/store";
import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { Button, Card } from "react-native-paper";

export default function WorkoutItem({ data }) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(remove(data.id));
  };

  const handleCheck = () => {
    dispatch(update({ ...data, completed: !data.completed }))
  }


  return (
    <Card className="mb-7">
      <Card.Title title={data.id} />
      <Card.Content>
        <Text className="text-xl">Name: {data.name}</Text>
        <Text className="text-xl">Duration: {data.duration}</Text>
        <Text className="text-xl">Category: {data.category}</Text>
        <Text className="text-xl">
          Completed: {data.completed ? "Hoàn thành" : "Chưa hoàn thành"}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" buttonColor="green" onPress={handleCheck}>
          Check
        </Button>
        <Button
          mode="contained"
          buttonColor="blue"
          onPress={() => router.push(`/(tabs)/form?id=${data.id}`)}
        >
          Cập nhật
        </Button>
        <Button mode="contained" buttonColor="red" onPress={handleDelete}>
          Xoá
        </Button>
      </Card.Actions>
    </Card>
  );
}
