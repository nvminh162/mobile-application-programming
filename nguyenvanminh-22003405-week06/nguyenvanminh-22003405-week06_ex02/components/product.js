import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

const API_URL = 'https://68d35eec214be68f8c65995b.mockapi.io/api/v1/b02';

export default function ProductScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (!mounted) return;
        setProducts(data || []);
        // Ưu tiên product từ params, nếu không có thì lấy item đầu
        setProduct(route?.params?.product ?? (data && data[0] ? data[0] : null));
      } catch (e) {
        setError('Không thể tải sản phẩm');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [route?.params?.product]);

  React.useEffect(() => {
    if (route?.params?.product) {
      setProduct(route.params.product);
    }
  }, [route?.params?.product]);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
        <Text style={{ marginTop: 8 }}>Đang tải...</Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>{error || 'Không có dữ liệu sản phẩm'}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, gap: 10 }}>
        <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Image
            style={{ width: '90%', height: 350, resizeMode: 'contain' }}
            source={product?.image}
          />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>{product?.name}</Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Entypo name="star" size={15} color="yellow" />
            <Entypo name="star" size={15} color="yellow" />
            <Entypo name="star" size={15} color="yellow" />
            <Entypo name="star" size={15} color="yellow" />
            <Entypo name="star" size={15} color="yellow" />
          </View>
          <Text style={{ fontWeight: '600' }}>(Xem 1k đánh giá)</Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{ fontWeight: 'bold' }}>
            {product?.price.toLocaleString('vi-VN')}đ
          </Text>
          <Text
            style={{
              color: 'gray',
              fontStyle: 'italic',
              textDecorationLine: 'line-through',
            }}>
            {product?.originPrice.toLocaleString('vi-VN')}đ
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', color: 'red' }}>
            Ở đâu rẻ hơn hoàn tiền
          </Text>
          <FontAwesome name="question-circle-o" size={20} color="gray" />
        </View>

        <View>
          <Pressable
            onPress={() => navigation.navigate('ProductChoosen')}
            style={{
              paddingHorizontal: 20,
              borderWidth: 1,
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>
              4 màu - chọn màu - ({product?.color})
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => console.log('Mua với màu:', product.color)}
          style={{
            backgroundColor: 'red',
            margin: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Chọn mua
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
