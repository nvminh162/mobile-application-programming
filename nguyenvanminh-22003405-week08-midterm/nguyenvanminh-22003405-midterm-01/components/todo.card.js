import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';

export default function TodoCard({ item, onDelete, onUpdate, onCompleted }) {
  const [todo, setTodo] = useState(item);

  useEffect(() => {
    setTodo(item);
  }, [item]);

  const handleTextChange = (text) => {
    setTodo((prev) => ({ ...prev, name: text }));
  };

  const handleToggleCompleted = () => {
    const updateNewTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    onUpdate(todo.id, updateNewTodo)
  };

  return (
    <View
      style={{
        backgroundColor: '#cccc',
        padding: 10,
        gap: 10,
        margin: 10,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          label="Tên công việc"
          value={todo.name}
          onChangeText={handleTextChange}
        />
        <Text>{todo.isCompleted ? 'Hoàn thành' : 'Chưa hoàn thành'}</Text>
      </View>
      <View
        style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-end' }}>
        <Button
          color="blue"
          mode="contained"
          onPress={() => onUpdate(todo.id, todo)}>
          Cập nhật
        </Button>
        <Button color="red" mode="contained" onPress={() => onDelete(todo.id)}>
          Xoá
        </Button>
        <Button color="green" mode="contained" onPress={handleToggleCompleted}>
          Hoàn thành
        </Button>
      </View>
    </View>
  );
}
