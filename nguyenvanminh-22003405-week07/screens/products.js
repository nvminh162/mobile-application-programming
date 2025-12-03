import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Product from '../components/product';

// Sample data for products
const products = [
  {
    id: '1',
    name: 'Pinarello',
    price: '$1800',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Roadbike',
  },
  {
    id: '2',
    name: 'Pina Mountain',
    price: '$1700',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Roadbike',
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: '$1500',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Mountain',
  },
  {
    id: '4',
    name: 'Pinarello',
    price: '$1900',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Mountain',
  },
  {
    id: '6',
    name: 'Pina Bike',
    price: '$1500',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Mountain',
  },
  {
    id: '6',
    name: 'Pinarello',
    price: '$1900',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    category: 'Mountain',
  },
];

export default function Products() {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        The world’s Best Bike
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#007BFF',
          }}>
          All
        </Text>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#007BFF',
          }}>
          Roadbike
        </Text>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#007BFF',
          }}>
          Mountain
        </Text>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <Product item={item} />} 
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
