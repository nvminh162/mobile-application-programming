import { addCart, useAppDispatch } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { ActivityIndicator, Button, Card } from "react-native-paper";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { GET, isLoading } = useFetch();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    category: "",
    description: "",
    price: 0,
  });

  const useDispatch = useAppDispatch();

  const handleAddCart = () => {
    useDispatch(addCart(product));
  };

  useFocusEffect(
    useCallback(() => {
      GET(`/product/${id}`).then((res) => setProduct(res));
    }, [id])
  );

  if (isLoading || !product) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator animating={true} size={"large"} color="red" />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center m-10">
      <Button
        onPress={() => router.back()}
        className="absolute left-0 top-0"
        mode="contained"
      >
        Back
      </Button>
      <Text className="font-bold text-red-500 text-xl md-5">
        Chi tiết sản phẩm
      </Text>
      <Card>
        <Card.Title title={`ID: ${product.id}`} />
        <Card.Content>
          <Text className="text-lg font-bold ">+ Name: {product.name}</Text>
          <Text className="text-lg font-bold ">
            + Category: {product.category}
          </Text>
          <Text className="text-lg font-bold ">
            + Description: {product.description}
          </Text>
          <Text className="text-lg font-bold ">+ Price: {product.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" buttonColor="green" onPress={handleAddCart}>
            Add to cart
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
