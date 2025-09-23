import { View, Text, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  return (
    <View
      style={{
        paddingVertical: 20,
        backgroundColor: '#00ffff',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: 15,
      }}>
      <Entypo name="menu" size={24} color="black" />
      <Entypo name="home" size={24} color="black" />
      <Entypo name="back" size={24} color="black" />
    </View>
  );
}
