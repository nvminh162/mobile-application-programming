import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import TodoForm from '../components/todo.form';
import TodoCard from '../components/todo.card';
import { useFetch } from '../hooks/useFetch';

// mock hard data
// const DATA = [
//   { id: '1', name: 'Học react', isCompleted: true },
//   { id: '2', name: 'Học JS', isCompleted: false },
//   { id: '3', name: 'Học Mongo', isCompleted: true },
//   { id: '4', name: 'Học Spring', isCompleted: false },
//   { id: '5', name: 'Học Spring', isCompleted: false },
//   { id: '6', name: 'Học Spring', isCompleted: false },
//   { id: '7', name: 'Học Spring', isCompleted: false },
//   { id: '8', name: 'Học Spring', isCompleted: false },
//   { id: '9', name: 'Học Spring', isCompleted: false },
//   { id: '10', name: 'Học Spring', isCompleted: false },
// ];

// mock soft data from api
const baseUrl = 'https://68e4d2798e116898997d1406.mockapi.io';

export default function TodoScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const handleCreate = async (item) => {
    await post('/todos', item);
    handleFetch();
  }

  const handleFetch = () => {
    get('/todos').then((res) => setTodos(res));
  };

  const handleDelete = async (id) => {
    await del(`/todos/${id}`);
    handleFetch();
  };

  const handleUpdate = async (id, item) => {
    await put(`/todos/${id}`, item);
    handleFetch();
  };

  useEffect(() => handleFetch(), []);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ margin: 'auto' }}
        size="large"
        animating={true}
        color="red"
      />
    );
  }

  return (
    <View style={style.container}>
      <TodoForm onCreate={handleCreate} />

      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TodoCard
            item={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
