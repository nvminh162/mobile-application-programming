import { addCart, removeCart, useAppDispatch } from "@/features/store";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-paper";

export default function CartItem({ product, quantity }) {
  const useDispatch = useAppDispatch();

  const handleAddCart = () => {
    useDispatch(addCart(product));
  };

  const handleRemoveCart = () => {
    useDispatch(removeCart(product));
  };

  return (
    <View className="mb-5">
      <Card>
        <Card.Title title={`ID: ${product.id}`} />
        <Card.Content className="gap-3">
          <Text className="text-lg font-mono">name: {product.name}</Text>
          <Text className="text-lg font-mono">
            category: {product.category}
          </Text>
          <Text className="text-lg font-mono">
            description: {product.description}
          </Text>
          <Text className="text-lg font-mono">price: {product.price}</Text>
          <Text className="text-orange-500 text-lg font-mono">
            quantity: {quantity}
          </Text>
          <Text className="text-red-500 text-lg font-mono">
            amount: {quantity * product.price}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleAddCart} mode="contained" buttonColor="green">
            +
          </Button>
          <Button onPress={handleRemoveCart} mode="contained" buttonColor="red">
            -
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
