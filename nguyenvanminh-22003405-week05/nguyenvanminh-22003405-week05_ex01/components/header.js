import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  return (
    <View style={styles.container}>
      <Entypo name="arrow-left" size={24} color="black" />
      <Text style={styles.title}>Chat</Text>
      <Entypo name="shopping-cart" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7FFFD4"
  },
  title: {
    fontSize: 17,
    fontWeight: "bold"
  }
})
