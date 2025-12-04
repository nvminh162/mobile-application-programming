import { addCart, useAppDispatch } from '@/features/store'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'

export default function ProductItem({ data }) {
  const useDispatch = useAppDispatch();

  const handleAddCart = () => {
    useDispatch(addCart(data))
  }

  return (
    <View className='mb-5'>
        <Card>
            <Card.Title title={`ID: ${data.id}`} />
            <Card.Content>
                <Text className='text-lg font-bold '>+ Name: {data.name}</Text>
                <Text className='text-lg font-bold '>+ Category: {data.category}</Text>
                <Text className='text-lg font-bold '>+ Description: {data.description}</Text>
                <Text className='text-lg font-bold '>+ Price: {data.price}</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode='contained' buttonColor='green' onPress={handleAddCart}>Add to cart</Button>
                <Button mode='contained' buttonColor='blue' onPress={() => router.push(`/(tabs)/product-detail?id=${data.id}`)}>Detail</Button>
            </Card.Actions>
        </Card>
    </View>
  )
}
