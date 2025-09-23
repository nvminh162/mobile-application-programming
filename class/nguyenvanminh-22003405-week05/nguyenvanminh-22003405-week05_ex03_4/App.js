import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Item from './components/Item';
import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://68d2c91ecc7017eec5452e9e.mockapi.io/api/v1/rc_week05')
        .then((data) => data.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log(users);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#DDDDDD',
            paddingVertical: 25,
          }}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Bạn thắc mắc với sản phẩm vừa xem. Đừng ngại chát với Shop!
          </Text>
        </View>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="blue" />
            <Text>Đang tải dữ liệu...</Text>
          </View>
        ) : (
          <FlatList
            style={{ flex: 1 }}
            data={users}
            renderItem={Item}
            keyExtractor={(item) => item.id}
            // horizontal
            // showsHorizontalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
