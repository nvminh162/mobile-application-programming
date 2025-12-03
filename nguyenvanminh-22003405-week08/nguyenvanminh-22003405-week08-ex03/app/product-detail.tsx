import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const phoneColors = {
  silver: { image: require("../assets/phone/vs_silver.png"), label: "Bạc" },
  red: { image: require("../assets/phone/vs_red.png"), label: "Đỏ" },
  black: { image: require("../assets/phone/vs_black.png"), label: "Đen" },
  blue: { image: require("../assets/phone/vs_blue.png"), label: "Xanh" },
};

export default function ProductDetail() {
  const router = useRouter();
  const { color = "blue" } = useLocalSearchParams();
  const selectedPhone = phoneColors[color as keyof typeof phoneColors] || phoneColors.blue;

  return (
    <View style={styles.container}>
      <Image
        source={selectedPhone.image}
        style={styles.phoneImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      <View style={styles.ratingContainer}>
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Text key={i} style={styles.star}>⭐</Text>
          ))}
        </View>
        <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.990.000 đ</Text>
      </View>

      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Text style={styles.questionMark}>?</Text>
      </View>

      <TouchableOpacity 
        style={styles.selectButton}
        onPress={() => router.push("/select-color")}
      >
        <Text style={styles.selectButtonText}>4 MÀU-CHỌN MÀU</Text>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buyButton}
        onPress={() => router.back()}
      >
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  phoneImage: {
    width: 250,
    height: 300,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
    marginRight: 10,
  },
  star: {
    fontSize: 20,
  },
  ratingText: {
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 40,
  },
  oldPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
  },
  promoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  promoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#EE0D0D",
    marginRight: 5,
  },
  questionMark: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  selectButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  selectButtonText: {
    fontSize: 14,
  },
  arrow: {
    fontSize: 14,
  },
  buyButton: {
    backgroundColor: "#EE0D0D",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
