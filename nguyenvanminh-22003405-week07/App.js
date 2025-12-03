import Home from './screens/home';
import Products from './screens/products'
import ProductDetail from './screens/product.detail'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ProductDetail />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
