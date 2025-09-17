import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Entypo name="menu" size={24} color="black" />
      <Entypo name="home" size={24} color="black" />
      <Entypo name="attachment" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7FFFD4"
  }
})
