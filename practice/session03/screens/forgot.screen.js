import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function ForgotScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: '#00CCF9',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingVertical: 100,
      }}>
      <Image source={require('../assets/2.png')} />

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
          FORGET PASSWORD
        </Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <TextInput
          onPress={() => {
            navigation.navigate('VerifyScreen')
          }}
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          placeholder="Email"
        />
      </View>

      <View style={{ width: '100%' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: '#E3C000',
            paddingVertical: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
