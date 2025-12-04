import { remove, update, useAppDispatch } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-paper";

export default function GroceryItem({ data }) {
  const { DELETE, PUT } = useFetch();
  const useDispatch = useAppDispatch();

  const handleDelete = () => {
    if (!confirm("Delete item?")) return;
    DELETE(`/grocery/${data.id}`).then(() => useDispatch(remove(data)));
  };

  const handleToggleStatus = () => {
    PUT(`/grocery/${data.id}`, { ...data, bought: !data.bought }).then(() =>
      useDispatch(update({ ...data, bought: !data.bought }))
    );
  };

  return (
    <View className="mb-5 w-full">
      <Card onPress={handleToggleStatus}>
        <Card.Title title={`ID: ${data.id}`}></Card.Title>
        <Card.Content>
          <Text className="font-medium text-lg">name: {data.name}</Text>
          <Text className="font-medium text-lg">quantity: {data.quantity}</Text>
          <Text className="font-medium text-lg">category: {data.category}</Text>
          <Text className="font-medium text-lg">
            Status: {data.bought ? "bought" : "no bought"}
          </Text>
          <Text className="font-medium text-lg">
            created_at: {new Date(data.created_at).toLocaleDateString()}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push(`/(home)/form?id=${data.id}`)} mode="contained" buttonColor="blue">
            Update
          </Button>
          <Button mode="contained" buttonColor="red" onPress={handleDelete}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
