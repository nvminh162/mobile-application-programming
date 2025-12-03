import { remove, toggleStatus, useAppDispatch } from '@/features/store';
import { useFetch } from '@/hooks/useFetch'
import { router } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'

export default function TodoItem({ data }) {
  const { DELETE, PUT } = useFetch();
  const useDispatch = useAppDispatch();

  const handleDelete = () => {
    DELETE(`/todos/${data.id}`).then(() => useDispatch(remove(data.id)));
  }

  const handleToggle = () => {
    PUT(`/todos/${data.id}`, {...data, isDone: !data.isDone}).then(() => useDispatch(toggleStatus(data.id)))
  }

  return (
    <View className='mb-5'>
        <Card>
            <Card.Title title={data.title}></Card.Title>
            <Card.Content>
                <Text>Nội dung: {data.content}</Text>
                <Text>Trạng thái: {data.isDone ? "Hoàn thành" : "Chưa hoàn thành"}</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode='contained' buttonColor='green' onPress={handleToggle}>Check</Button>
                <Button mode='contained' buttonColor='blue' onPress={() => router.push(`/(tabs)/form?id=${data.id}`)}>Update</Button>
                <Button mode='contained' buttonColor='red' onPress={handleDelete}>Delete</Button>
            </Card.Actions>
        </Card>
    </View>
  )
}
