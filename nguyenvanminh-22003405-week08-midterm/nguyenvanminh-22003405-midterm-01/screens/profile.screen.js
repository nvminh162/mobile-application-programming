import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={style.container}>
      <TextInput style={style.input} label="Họ và tên" value="Nguyễn Văn Minh" />
      <TextInput style={style.input} label="MSSV" value="22003405" />
      <TextInput style={style.input} label="MSSV" value="DHKTPM18A" />
      <Button style={style.button} mode="contained" color="blue" onPress={() => navigation.goBack()}>
        Back
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    margin: 30
  },
  input: {
    width: "100%"
  },
  button: {
    width: "100%",
    padding: 5
  }
});
