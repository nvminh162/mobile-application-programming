import { SafeAreaView, StyleSheet } from 'react-native';
import Tiki from './app/tiki'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tiki/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
