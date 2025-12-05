import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-paper'

export default function _layout() {
  return (
    <View className='flex-1'>
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "red" }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Icon source={"home"} size={25} color={color} />,
                }}
            />
            <Tabs.Screen
                name='form'
                options={{
                    title: "Form",
                    tabBarIcon: ({ color }) => <Icon source={"form-select"} size={25} color={color} />,
                }}
            />
            <Tabs.Screen
                name='sync'
                options={{
                    title: "Sync",
                    tabBarIcon: ({ color }) => <Icon source={"sync"} size={25} color={color} />,
                }}
            />
        </Tabs>
    </View>
  )
}
