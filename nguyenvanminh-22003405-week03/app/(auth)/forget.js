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

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#d5f6ff', '#00bfff']} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/lock.png')} style={styles.image} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>FORGET</Text>
          <Text style={styles.title}>PASSWORD</Text>
          <View style={{ padding: 10 }} />
          <Text style={styles.content}>
            Provide your account's email for which you
          </Text>
          <Text style={styles.content}>want to reset password</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email"
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
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
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '900',
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
    flexDirection: "column"
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
    backgroundColor: "#CCC",
    width: 250,
    padding: 10,
  },
});
