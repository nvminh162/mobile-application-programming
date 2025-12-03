import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Footer from './components/footer';
import Item from './components/Item';

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu',
    shopName: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1 Kg khô gà',
    shopName: 'LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Lãnh đạo đơn giản',
    shopName: 'Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Hiếu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Fouth Item',
    shopName: 'Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    title: 'Donald Trump',
    shopName: 'Hẹ Hẹ',
    image: require('./assets/trump_1.png'),
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
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
        <FlatList
          style={{ flex: 1 }}
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
