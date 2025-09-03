import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#d5f6ff', '#00bfff']} style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={{ fontWeight: '700', fontSize: 50 }}>CODE</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>VERIFICATION</Text>
          <View style={{ padding: 10 }} />
          <Text style={styles.content}>Enter ontime password sent on</Text>
          <Text style={styles.content}>+84 353 999 798</Text>
        </View>

        <View style={styles.buttonContainer}>
          <OTPTextView
            autoFocus
            inputCount={6}
            inputCellLength={1}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between', 
              alignItems: 'center',
            }}
            textInputStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderBottomWidth: 1,
              borderRadius: 5,
              padding: 10,
              width: 40, // set width to control size
              height: 50,
              textAlign: 'center', // center the text
              fontSize: 18,
            }}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Verify Code</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
  },
  content: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#CCC',
    width: 250,
    padding: 10,
  },
});
