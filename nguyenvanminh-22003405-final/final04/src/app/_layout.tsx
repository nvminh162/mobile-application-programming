import { View } from "react-native";
import "../global.css";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/utils/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
