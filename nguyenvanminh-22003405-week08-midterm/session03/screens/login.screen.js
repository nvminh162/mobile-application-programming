import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
        paddingVertical: 70,
      }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 50 }}>LOGIN</Text>
      </View>

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
      </View>

      <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: '#00CCF9',
            paddingVertical: 15,
            borderRadius: 10,
            width: '100%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              textTransform: 'uppercase',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 20,
          }}>
          <TouchableOpacity
            style={{
              flexGrow: 1,
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexGrow: 1,
            }}>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: '100%', gap: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          Other login methods
        </Text>
        <View style={{ width: '100%', flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'black',
              paddingVertical: 15,
              borderRadius: 10,
              flexGrow: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                textTransform: 'uppercase',
              }}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingVertical: 15,
              borderRadius: 10,
              flexGrow: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: 18,
                textTransform: 'uppercase',
              }}>
              Github
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingVertical: 15,
              borderRadius: 10,
              flexGrow: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: 18,
                textTransform: 'uppercase',
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
