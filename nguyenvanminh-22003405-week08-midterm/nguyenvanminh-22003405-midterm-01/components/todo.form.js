import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useState } from 'react';

export default function TodoForm({ onCreate }) {
  const [name, setName] = useState('');

  const handlePressCreate = () => {
    const newTodo = {
      id: Date.now().toString(),
      name: name,
      isCompleted: false,
    };
    onCreate(newTodo);
    setName("");
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        label="Tên công việc"
        onChangeText={(text) => setName(text)}
      />
      <Button mode="contained" style={style.button} onPress={handlePressCreate}>
        Thêm
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 10,
  },
});
