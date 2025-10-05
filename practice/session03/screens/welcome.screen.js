import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        backgroundColor: "#00CCF9"
      }}>
      <Image source={require('../assets/1.png')} />

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
          GROW YOUR BUSINESS
        </Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={{ gap: 20, width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}
            style={{
              backgroundColor: '#E3C000',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen')
            }}
            style={{
              backgroundColor: '#E3C000',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('ForgotScreen')
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              HOW WE WORK?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
