import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

const PRODUCTS = [
  { id: 1, name: 'iPhone 15', price: 999, image: 'https://picsum.photos/seed/p1/200' },
  { id: 2, name: 'Galaxy S24', price: 899, image: 'https://picsum.photos/seed/p2/200' },
  { id: 3, name: 'Pixel 9', price: 799, image: 'https://picsum.photos/seed/p3/200' },
  { id: 4, name: 'Xiaomi 14', price: 699, image: 'https://picsum.photos/seed/p4/200' },
  { id: 5, name: 'OnePlus 12', price: 749, image: 'https://picsum.photos/seed/p5/200' },
];

const FavCtx = React.createContext();

function ProductsScreen({ navigation }) {
  const { favorites, toggleFav } = React.useContext(FavCtx);

  const renderItem = ({ item }) => {
    const liked = favorites.has(item.id);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
          backgroundColor: '#fff',
          borderRadius: 12,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 1
        }}
      >
        <Image source={{ uri: item.image }} style={{ width: 56, height: 56, borderRadius: 8, marginRight: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
          <Text style={{ marginTop: 4, color: '#555' }}>${item.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleFav(item.id)}
          style={{ padding: 6 }}
        >
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={22} color={liked ? '#ff3b30' : '#8e8e93'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f8fa', padding: 16 }}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

function FavoritesScreen({ navigation }) {
  const { favorites, toggleFav } = React.useContext(FavCtx);
  const favList = PRODUCTS.filter(p => favorites.has(p.id));

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f8fa', padding: 16 }}>
      {favList.length === 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="heart-outline" size={48} color="#bbb" />
          <Text style={{ marginTop: 8, color: '#777' }}>Chưa có sản phẩm yêu thích</Text>
        </View>
      ) : (
        <FlatList
          data={favList}
          keyExtractor={(it) => String(it.id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                backgroundColor: '#fff',
                borderRadius: 12,
                marginBottom: 10,
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 1
              }}
            >
              <Image source={{ uri: item.image }} style={{ width: 56, height: 56, borderRadius: 8, marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                <Text style={{ marginTop: 4, color: '#555' }}>${item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleFav(item.id)} style={{ padding: 6 }}>
                <Ionicons name="trash-outline" size={22} color="#ff3b30" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
}

function ProductDetailsScreen({ route }) {
  const { id } = route.params || {};
  const product = PRODUCTS.find(p => p.id === id);
  const { favorites, toggleFav } = React.useContext(FavCtx);
  const liked = favorites.has(id);

  if (!product) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Không tìm thấy sản phẩm</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f8fa', padding: 16 }}>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 220, borderRadius: 16, marginBottom: 16 }} />
      <Text style={{ fontSize: 22, fontWeight: '700' }}>{product.name}</Text>
      <Text style={{ fontSize: 18, marginTop: 8, color: '#444' }}>${product.price}</Text>
      <TouchableOpacity
        onPress={() => toggleFav(product.id)}
        style={{
          marginTop: 16,
          backgroundColor: liked ? '#ff3b30' : '#007aff',
          paddingVertical: 12,
          borderRadius: 12,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '700' }}>
          {liked ? 'Bỏ Yêu thích' : 'Thêm Yêu thích'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let name = 'list-outline';
          if (route.name === 'Products') name = focused ? 'pricetags' : 'pricetags-outline';
          if (route.name === 'Favorites') name = focused ? 'heart' : 'heart-outline';
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: '#8e8e93'
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [favorites, setFavorites] = React.useState(new Set());

  const toggleFav = React.useCallback((id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <FavCtx.Provider value={{ favorites, toggleFav }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: 'Product Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavCtx.Provider>
  );
}
