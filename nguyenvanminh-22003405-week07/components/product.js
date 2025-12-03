import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

export default function Product({ item }) {
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '45%', // Half the screen width for two columns
      }}>
      <Image
        source={item.image}
        style={{
          width: 150,
          height: 150,
          resizeMode: 'contain',
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 10,
          textAlign: 'center',
        }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 14, color: '#FF5722', marginBottom: 10 }}>
        {item.price}
      </Text>

      {/* Heart Icon (Wishlist) */}
      <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
        <Text style={{ fontSize: 20 }}>💖</Text>
      </TouchableOpacity>
    </View>
  );
}
