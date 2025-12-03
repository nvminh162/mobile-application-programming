import {
  Text,
  Image,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Tiki() {
  return (
    <SafeAreaView style={styles.container}>
      // One
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          padding: 5,
          backgroundColor: 'white',
        }}>
        <Image
          style={{
            width: 150,
            height: 200,
            resizeMode: 'contain',
          }}
          source={require('../assets/book.png')}
        />
        <View
          style={{
            gap: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 14,
            }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 14,
            }}>
            Cung cấp bới Tiki Trading
          </Text>
          <Text
            style={{
              fontWeight: '900',
              color: 'red',
              fontSize: 17,
            }}>
            100.000đ
          </Text>
          <Text
            style={{
              fontWeight: '900',
              color: 'grey',
              textDecorationLine: 'line-through',
              fontSize: 13,
            }}>
            1.000.000đ
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Button style={{}} title="-" color="#cccc" />
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ fontWeight: '900' }}>1</Text>
              </View>
              <Button style={{}} title="+" color="#cccc" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                }}>
                <Text style={{ color: 'blue', fontWeight: '900' }}>
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      // Two
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          padding: 10,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text style={{ color: 'black', fontWeight: '900' }}>
            Mã giảm giá đã lưu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text style={{ color: 'blue', fontWeight: '900' }}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>
      // Three
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <TextInput
          style={{ height: 40, width: 280, borderWidth: 1, padding: 10 }}
          placeholder="Mã giảm giá"
        />
        <Button style={{}} title="Áp dụng" color="blue" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: 'white',
          marginVertical: 20
        }}>
        <Text style={{fontWeight: "900"}}>Bạn có phiếu quà tặng Tiki/Got it/ UrBox?</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text style={{ color: 'blue', fontWeight: '900' }}>
            Nhận tại đây?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#cccc',
  },
});
