import { Text, View, Image, TouchableOpacity } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function VerifyScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: '#00CCF9',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 100,
      }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 50 }}>CODE</Text>
      </View>

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>VERIFICATION</Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>
          Enter ontime password sent on +84 353999798
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={{}}
          focusColor="#007AFF"
          focusStickBlinkingDuration={400}
          type="numeric"
          secureTextEntry={false}
          autoFocus={true}
          theme={{
            containerStyle: {
              width: '100%',
              justifyContent: 'space-between',
            },
            pinCodeContainerStyle: {
              width: 45,
              height: 50,
              borderWidth: 2,
              borderRadius: 8,
              backgroundColor: '#fff',
            },
            pinCodeTextStyle: {
              fontSize: 20,
              color: '#000',
              fontWeight: 'bold',
            },
          }}
          onFilled={(text) => {
            console.log('OTP is:', text);
          }}
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
            Verify Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
