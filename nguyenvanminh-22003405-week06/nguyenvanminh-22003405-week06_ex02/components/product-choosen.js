import { Text, View, Pressable, Image, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://68d35eec214be68f8c65995b.mockapi.io/api/v1/b02';

export default function ProductChoosenScreen() {
  const navigation = useNavigation();

  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState(null); // current selection
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  // Gọi ALL và set mặc định product = products[0]
  React.useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        const data = await res.json();
        const list = Array.isArray(data) ? data : [];
        setProducts(list);
        setProduct(list[0] ?? null);
      } catch (e) {
        if (e.name !== 'AbortError') setError('Không thể tải sản phẩm');
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text>{error || 'Không có dữ liệu sản phẩm'}</Text>
      </View>
    );
  }

  const price = Number(product?.price) || 0;

  return (
    <View style={{ flex: 1, backgroundColor: '#d3d3d3' }}>
      {/* Header sản phẩm đang chọn */}
      <View
        style={{
          backgroundColor: 'white',
          height: 150,
          justifyContent: 'flex-start',
          paddingHorizontal: 10,
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,
        }}>
        <Image
          style={{ width: '30%', height: '80%' }}
          source={{ uri: product.image }}
          resizeMode="contain"
        />
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            {product?.name}{'\n'}Hàng chính hãng
          </Text>
          <Text style={{ marginTop: 5 }}>
            Màu: <Text style={{ fontWeight: 'bold' }}>{product?.color}</Text>
          </Text>
          <Text style={{ marginTop: 5 }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 5 }}>
            {price.toLocaleString('vi-VN')} đ
          </Text>
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Chọn một màu bên dưới:
        </Text>
      </View>

      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setProduct(item)}
            style={{
              margin: 10,
              padding: 10,
              borderWidth: product?.id === item.id ? 3 : 1,
              borderColor: product?.id === item.id ? 'purple' : 'gray',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Text style={{ marginTop: 5 }}>{item.color}</Text>
          </Pressable>
        )}
      />

      {/* Nút XONG */}
      <View style={{ marginBottom: 20 }}>
        <Pressable
          disabled={!product}
          onPress={() => navigation.navigate('Product', { product })}
          style={{
            backgroundColor: product ? '#4169E1' : 'gray',
            margin: 10,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
