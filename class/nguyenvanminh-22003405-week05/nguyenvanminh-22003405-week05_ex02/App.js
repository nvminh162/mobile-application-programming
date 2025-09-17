import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Footer from './components/footer';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2;

const products = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '99.900 đ',
    originalPrice: '110k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '66.900 đ',
    originalPrice: '75k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '80k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '75k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '80k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '75k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '7',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '80k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
  {
    id: '8',
    title: 'Cáp chuyển từ Cổng USB sang Pin2',
    price: '69.900 đ',
    originalPrice: '75k',
    image: require('./assets/440039b847a25e463563954abcba9a885fd06c1a.png'),
  },
];

const RenderProductItem = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={[styles.productCard, { width: itemWidth }]}
      activeOpacity={0.8}
      onPress={() => {
        // Handle product press
        console.log('Product pressed:', item.title);
      }}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={{
          flexDirection: "row",
          marginVertical: 5
        }}>
          <Entypo name="star" size={10} color="yellow" />
          <Entypo name="star" size={10} color="yellow" />
          <Entypo name="star" size={10} color="yellow" />
          <Entypo name="star" size={10} color="yellow" />
          <Entypo name="star" size={10} color="yellow" />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{item.price}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={products}
          renderItem={RenderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productGrid}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 10,
  },
  productTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  productGrid: {
    padding: 10,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});
