import TodoItem from '@/components/TodoItem'
import { setTodos, useAppDispatch, useAppSelector } from '@/features/store'
import { useFetch } from '@/hooks/useFetch'
import { useFocusEffect } from 'expo-router'
import React, { useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function HomeScreen() {
  const { isLoading, GET } = useFetch()
  const { todos } = useAppSelector(state => state.todo);
  const useDispatch = useAppDispatch();

  const handleFetch = () => {
    GET("/todos").then(res => useDispatch(setTodos(res)));
  }

  useFocusEffect(
    useCallback(() => {
      handleFetch();
    }, [])
  );

  if(isLoading) {
    return <View className='flex-1 justify-center items-center'>
      <ActivityIndicator animating={true} color='red' size={"large"} />
    </View>
  }

  return (
    <View className='flex-1 m-5'>
      <Text className='text-center m-5 text-xl'>Todos</Text>
      <FlatList data={todos} keyExtractor={(i) => i.id} renderItem={({item}) => <TodoItem data={item}/>}/>
    </View>
  )
}
