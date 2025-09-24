import { Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ProductChoosenScreen() {
  const [selectedColor, setSelectedColor] = useState(null);
  const navigation = useNavigation();

  const colors = [
    { id: 1, name: 'Đen', code: 'black', image: require('../assets/vs_black.png') },
    { id: 2, name: 'Xanh', code: 'blue', image: require('../assets/vs_blue.png') },
    { id: 3, name: 'Đỏ', code: 'red', image: require('../assets/vs_red.png') },
    { id: 4, name: 'Bạc', code: 'silver', image: require('../assets/vs_silver.png') },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#d3d3d3' }}>
      <View style={{
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
          source={selectedColor ? selectedColor.image : require('../assets/vs_black.png')}
          resizeMode="contain"
        />
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
          </Text>
          {selectedColor && (
            <Text style={{ marginTop: 5 }}>
              Màu: <Text style={{ fontWeight: 'bold' }}>{selectedColor.name}</Text>
            </Text>
          )}
          <Text style={{ marginTop: 5 }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 5 }}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Chọn một màu bên dưới:
        </Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        {colors.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => setSelectedColor(item)}
            style={{
              backgroundColor: item.code,
              padding: 30,
              width: 60,
              height: 60,
              marginVertical: 8,
              borderWidth: selectedColor?.id === item.id ? 3 : 0,
              borderColor: selectedColor?.id === item.id ? 'purple' : 'transparent',
            }}
          />
        ))}
      </View>

      <View style={{ marginBottom: 20 }}>
        <Pressable
          disabled={!selectedColor}
          onPress={() => {
            navigation.navigate('Product', { color: selectedColor });
          }}
          style={{
            backgroundColor: selectedColor ? '#4169E1' : 'gray',
            margin: 10,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text style={{
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
