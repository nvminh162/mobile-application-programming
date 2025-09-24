import { Text, View, Pressable, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ProductScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const selectedColor = route.params?.color || {
    id: 1,
    name: 'Đen',
    code: 'black',
    image: require('../assets/vs_black.png'),
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, gap: 10 }}>
        <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
          <Image
            style={{ width: '90%', height: 350, resizeMode: 'contain' }}
            source={selectedColor.image}
          />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>
            Điện Thoại VSmart Joy3 - Chính Hãng
          </Text>
        </View>

        <View style={{
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

        <View style={{
          marginHorizontal: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
          <Text style={{ fontWeight: 'bold' }}>30.000.000đ</Text>
          <Text style={{
            color: 'gray',
            fontStyle: 'italic',
            textDecorationLine: 'line-through',
          }}>
            35.000.000đ
          </Text>
        </View>

        <View style={{
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
              4 màu - chọn màu - ({selectedColor.name})
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => console.log('Mua với màu:', selectedColor)}
          style={{
            backgroundColor: 'red',
            margin: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={{
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
