import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const API = "https://68d2c91ecc7017eec5452e9e.mockapi.io/api/v1/image";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false); // false = ListView (1 cột), true = GridView (2 cột)
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Không tải được dữ liệu. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderCard = ({ item }) => (
    <View
      style={{
        flex: 1,
        margin: 6,
        borderRadius: 10,
        backgroundColor: "#f3f4f6",
        overflow: "hidden",
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 160, resizeMode: "cover" }}
      />
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "600" }}>ID: {item.id}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ flex: 1 }}>
          {/* Toggle List <-> Grid */}
          <TouchableOpacity
            onPress={() => setIsGrid((v) => !v)}
            style={{
              alignSelf: "center",
              marginTop: 12,
              marginBottom: 4,
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: "#0ea5e9",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              {isGrid ? "Chuyển sang ListView (1 cột)" : "Chuyển sang GridView (2 cột)"}
            </Text>
          </TouchableOpacity>

          {/* Loading / Error */}
          {loading ? (
            <View style={{ marginTop: 40, alignItems: "center" }}>
              <ActivityIndicator size="large" />
              <Text style={{ marginTop: 8 }}>Đang tải dữ liệu...</Text>
            </View>
          ) : error ? (
            <View style={{ marginTop: 40, alignItems: "center" }}>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          ) : (
            <>
              {/* ListView / GridView trong ScrollView -> tắt scroll của FlatList */}
              <FlatList
                data={images}
                key={isGrid ? "grid" : "list"} // đổi key để FlatList re-render đúng khi đổi columns
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                numColumns={isGrid ? 2 : 1}
              />

              <FlatList
                data={images}
                keyExtractor={(item) => `h_${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: width * 0.7,
                      marginRight: 10,
                      borderRadius: 12,
                      backgroundColor: "#eef2ff",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: "100%", height: 200 }}
                    />
                    <View style={{ padding: 8 }}>
                      <Text style={{ fontWeight: "600" }}>ID: {item.id}</Text>
                    </View>
                  </View>
                )}
              />
              <View style={{ height: 16 }} />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
