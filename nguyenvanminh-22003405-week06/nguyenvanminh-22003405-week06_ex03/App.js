import * as React from 'react';
import { View, Text, FlatList, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen() {
  const DATA = Array.from({ length: 20 }, (_, i) => ({ id: String(i + 1), title: `Item #${i + 1}` }));
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f7f8fa' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 12 }}>Home</Text>
      <FlatList
        data={DATA}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <View style={{
            padding: 14, backgroundColor: '#fff', borderRadius: 12, marginBottom: 10,
            shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 1
          }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

function SearchScreen() {
  const [q, setQ] = React.useState('');
  const DATA = ['apple', 'banana', 'cherry', 'durian', 'grape', 'mango', 'orange', 'pear', 'strawberry'];
  const filtered = DATA.filter((x) => x.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f7f8fa' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 12 }}>Search</Text>
      <TextInput
        placeholder="Nhập từ khóa..."
        value={q}
        onChangeText={setQ}
        returnKeyType="search"
        style={{
          backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10,
          fontSize: 16, marginBottom: 10, borderWidth: 1, borderColor: '#e6e6e6'
        }}
      />
      {q.length > 0 && (
        <Text style={{ marginBottom: 8, color: '#555' }}>Kết quả cho: “{q}” ({filtered.length})</Text>
      )}
      <FlatList
        data={filtered}
        keyExtractor={(it, idx) => `${it}-${idx}`}
        renderItem={({ item }) => (
          <View style={{
            padding: 14, backgroundColor: '#fff', borderRadius: 12, marginBottom: 10,
            shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 1
          }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', paddingVertical: 24, color: '#888' }}>Không có kết quả</Text>}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f8fa', padding: 16 }}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/200?img=13' }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 12 }}
      />
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Nguyen Van Minh - 22003405</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>@nvminh162</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            let name = 'home-outline';
            if (route.name === 'Home') name = focused ? 'home' : 'home-outline';
            if (route.name === 'Search') name = focused ? 'search' : 'search-outline';
            if (route.name === 'Profile') name = focused ? 'person' : 'person-outline';
            return <Ionicons name={name} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007aff',
          tabBarInactiveTintColor: '#8e8e93',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
