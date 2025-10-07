import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Button mode="contained" color="red" onPress={() => navigation.navigate('ProfileScreen')}>
        Profile Screen
      </Button>
      <Button mode="outlined" color="blue" onPress={() => navigation.navigate('TodoScreen')}>
        Todo Screen
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
});
