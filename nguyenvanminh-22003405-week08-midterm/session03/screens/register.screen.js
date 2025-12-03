import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 60,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>REGISTER</Text>

      <View style={{ width: '100%', gap: 30 }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          placeholder="Name"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          placeholder="Phone"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          placeholder="Birthday"
        />
      </View>

      <View style={{ width: '100%', gap: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: 'red',
            paddingVertical: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              textAlign: 'center',
              color: 'white',
            }}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center' }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}
