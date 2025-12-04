import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { Icon } from 'react-native-paper'

export default function TabsLayout() {
  return (
    <View className='flex-1 mb-2'>
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "red" }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} source={"home"}/>
                    )
                }}
            />
            <Tabs.Screen
                name='cart'
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} source={"cart"}/>
                    )
                }}
            />
            <Tabs.Screen
                name='sync'
                options={{
                    title: "Sync",
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} source={"sync"}/>
                    )
                }}
            />
            <Tabs.Screen
                name='product-detail'
                options={{
                    href: null
                }}
            />
        </Tabs>
    </View>
  )
}
