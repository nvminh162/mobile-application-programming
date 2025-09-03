import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#d5f6ff', '#00bfff']}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/circle.png')} style={styles.image} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>GROW</Text>
          <Text style={styles.title}>YOUR BUSINESS</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
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
});
