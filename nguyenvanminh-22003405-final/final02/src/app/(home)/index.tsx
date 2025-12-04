import GroceryItem from "@/components/GroceryItem";
import { setAll, useAppDispatch, useAppSelector } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, Button, Icon, TextInput } from "react-native-paper";

export default function HomeScreen() {
  const { isLoading, GET } = useFetch();

  const [search, setSearch] = useState("");

  const { items } = useAppSelector((state) => state.grocery);
  const useDispatch = useAppDispatch();

  const handleFetch = () => {
    GET(`/grocery`).then((res) => useDispatch(setAll(res)));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetch();
    }, [])
  );

  const filteredItems = useMemo(() => {
    return items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, items])

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator animating={true} size={"large"} color={"red"} />
      </View>
    );
  }

  return (
    <View className="flex-1 m-10">
      <TextInput
        label={"Tìm kiếm tên Grocery"}
        value={search}
        onChangeText={(v) => setSearch(v)}
      />

      <Text className="text-center font-bold text-2xl">Grocery List</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroceryItem data={item} />}
        ListEmptyComponent={
          <Text className="text-lg font-medium text-center mt-10">
            Chưa có Grocery nào, hãy thêm mới!
          </Text>
        }
      />

      <Button mode="contained" onPress={() => router.push('/(home)/form')}>Thêm</Button>
    </View>
  );
}
