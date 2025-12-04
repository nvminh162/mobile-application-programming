import "../global.css";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Slot/>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
