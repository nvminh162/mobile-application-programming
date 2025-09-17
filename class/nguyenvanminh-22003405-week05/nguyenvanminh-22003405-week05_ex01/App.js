import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Footer from './components/footer';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    shopName: 'LTD Food',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    shopName: 'LTD Food',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    shopName: 'LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '4',
    title: 'Fouth Item',
    shopName: 'LTD Food',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '5',
    title: 'Fouth Item',
    shopName: 'LTD Food',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '6',
    title: 'Fouth Item',
    shopName: 'LTD Food',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '7',
    title: 'Fouth Item',
    shopName: 'LTD Food',
    image: require('./assets/ca_nau_lau.png'),
  },
];

const Item = ({ image, title, shopName }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    }}>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 70,
          height: 70,
        }}
        source={image}
      />
      <View style={{ padding: 10 }}>
        <Text>{title}</Text>
        <Text style={{ color: 'red' }}>{shopName}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#ff6b6b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      }}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Chat
      </Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          style={{ flex: 1 }}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              image={item.image}
              shopName={item.shopName}
            />
          )}
        />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
