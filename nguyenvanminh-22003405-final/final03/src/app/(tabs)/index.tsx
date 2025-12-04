import ProductItem from "@/components/ProductItem";
import { authName, useAppDispatch, useAppSelector } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

export default function HomeScreen() {
  const useDispatch = useAppDispatch();
  const { studentName } = useAppSelector((state) => state.cart);

  const [product, setProduct] = useState([]);

  const { GET, isLoading } = useFetch();

  const handleLogout = () => {
    if(!confirm("Logout now?")) return;
    useDispatch(authName(""));
    router.replace(`/(auth)`)
  }

  const handleFetch = () => {
    GET(`/product`).then((res) => setProduct(res));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetch();
    }, [])
  );

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator animating={true} size={"large"} color="red" />
      </View>
    );
  }

  return (
    <View className="flex-1 m-10">
      <Text className="text-2xl font-bold text-red-500 text-center mb-2">
        Danh sách mặt hàng
      </Text>
      <Text className="text-lg font-bold text-center mb-5">
        Auth: {studentName}
      </Text>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem data={item} />}
        ListEmptyComponent={<Text className="text-center">Chưa có sản phẩm nào</Text>}
      />
      <Button className="absolute right-0 top-0" mode="contained" buttonColor="red" onPress={handleLogout}>Logout</Button>
    </View>
  );
}
