import { View, Text, TextInput } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  return (
    <View style={{
      paddingVertical: 20,
      backgroundColor: "#00ffff",
      paddingHorizontal: 15,
      flexDirection: "row",
      gap: 15
    }}>
      <Entypo name="arrow-left" size={24} color="black" />
      <TextInput
        value={"nvminh162"}
        placeholder={"Enter your search"}
        style={{
          height: 30,
          backgroundColor: "white",
          padding: 15,
          width: "100%",
          borderRadius: 5
        }}
      />
      <Entypo name="shopping-cart" size={24} color="black" />
      <Entypo name="dots-three-horizontal" size={24} color="black" />
    </View>
  )
}