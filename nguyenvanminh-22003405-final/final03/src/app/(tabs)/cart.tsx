import CartItem from "@/components/CartItem";
import { useAppSelector } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

export default function CartScreen() {
  const { GET, isLoading } = useFetch();

  const { items, total, studentName } = useAppSelector((state) => state.cart);

  useFocusEffect(
    useCallback(() => {
      console.log(items);
    }, [items])
  )

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator animating={true} size={"large"} color="red" />
      </View>
    );
  }

  return (
    <View className="flex-1 m-10">
      <Text className="text-xl font-bold text-center">Xin chào: {studentName}</Text>
      <Text className="text-xl font-bold text-center">Giỏ hàng của bạn</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity} />}
        ListEmptyComponent={<Text className="text-center">Chưa có sản phẩm nào trong giỏ hàng</Text>}
      />
      <Button mode="outlined" textColor="red" >Tổng tiền: {total}</Button>
    </View>
  );
}
