import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Item({ item }) {
  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    }}>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 70,
          height: 70,
        }}
        source={item.image}
      />
      <View style={{ padding: 10 }}>
        <Text>{item.title}</Text>
        <Text style={{ color: 'red' }}>{item.shopName}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#ff6b6b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      }}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Chat
      </Text>
    </TouchableOpacity>
  </View>
  );
}
