import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Entypo from '@expo/vector-icons/Entypo';

const Item = ({ item }) => {
  return (
    <View
      style={{
        width: '50%',
        padding: 10,
      }}>
      <Image
        style={{
          width: '100%',
          objectFit: 'contain',
        }}
        source={require('./assets/giacchuyen_1.png')}
      />
      <View style={{ padding: 10, gap: 3 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <View style={{ flexDirection: 'row', gap: 3 }}>
          <Entypo name="star" size={14} color="yellow" />
          <Entypo name="star" size={14} color="yellow" />
          <Entypo name="star" size={14} color="yellow" />
          <Entypo name="star" size={14} color="yellow" />
          <Entypo name="star" size={14} color="yellow" />
          <Text style={{ fontWeight: 'bold' }}>(15)</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.price.toLocaleString('vi-VN')} đ</Text>
          <Text style={{ fontWeight: 'medium', color: '#cccc' }}>{item.discount}</Text>
        </View>
      </View>
    </View>
  );
};

const DATA = [
  {
    id: 1,
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: 100000,
    discount: '-29%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 2,
    title: 'Tai nghe Gaming RGB LED',
    price: 750000,
    discount: '-15%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 3,
    title: 'Bàn phím cơ Blue Switch',
    price: 1200000,
    discount: '-20%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 4,
    title: 'Chuột Gaming DPI cao 16000',
    price: 450000,
    discount: '-10%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 5,
    title: 'Webcam HD 1080p có mic',
    price: 890000,
    discount: '-25%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 6,
    title: 'Loa Bluetooth 5.0 chống nước',
    price: 650000,
    discount: '-18%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 7,
    title: 'Ổ cứng SSD 500GB SATA',
    price: 1350000,
    discount: '-12%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 8,
    title: 'Hub USB 3.0 4 cổng',
    price: 280000,
    discount: '-30%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 9,
    title: 'Đế tản nhiệt laptop RGB',
    price: 520000,
    discount: '-22%',
    image: require('./assets/giacchuyen_1.png'),
  },
  {
    id: 10,
    title: 'Cáp HDMI 4K dài 2m',
    price: 180000,
    discount: '-8%',
    image: require('./assets/giacchuyen_1.png'),
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <FlatList
          style={{
            flex: 1,
          }}
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
