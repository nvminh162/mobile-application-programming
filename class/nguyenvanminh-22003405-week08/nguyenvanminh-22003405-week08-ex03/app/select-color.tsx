import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const phoneColors = [
  { name: "silver", image: require("../assets/phone/vs_silver.png"), color: "#C5F1FB", label: "Bạc" },
  { name: "red", image: require("../assets/phone/vs_red.png"), color: "#F30D0D", label: "Đỏ" },
  { name: "black", image: require("../assets/phone/vs_black.png"), color: "#000000", label: "Đen" },
  { name: "blue", image: require("../assets/phone/vs_blue.png"), color: "#234896", label: "Xanh" },
];

export default function SelectColor() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(phoneColors[3]); // Default blue

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={selectedColor.image}
          style={styles.phoneImage}
          resizeMode="contain"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.phoneName}>
            Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
          </Text>
          <Text style={styles.colorInfo}>
            Màu: <Text style={styles.colorName}>{selectedColor.label}</Text>
          </Text>
          <Text style={styles.supplierInfo}>
            Cung cấp bởi <Text style={styles.supplierName}>Tiki Tradding</Text>
          </Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.selectColorTitle}>Chọn một màu bên dưới:</Text>
        
        <View style={styles.colorOptions}>
          {phoneColors.map((phone) => (
            <TouchableOpacity
              key={phone.name}
              style={[
                styles.colorButton,
                { backgroundColor: phone.color },
                selectedColor.name === phone.name && styles.selectedColorButton,
              ]}
              onPress={() => setSelectedColor(phone)}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.doneButton}
          onPress={() => router.push({
            pathname: "/product-detail",
            params: { color: selectedColor.name }
          })}
        >
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },
  phoneImage: {
    width: 100,
    height: 130,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  phoneName: {
    fontSize: 14,
    marginBottom: 8,
  },
  colorInfo: {
    fontSize: 13,
    marginBottom: 5,
  },
  colorName: {
    fontWeight: "bold",
  },
  supplierInfo: {
    fontSize: 13,
    marginBottom: 5,
  },
  supplierName: {
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    padding: 20,
  },
  selectColorTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  colorOptions: {
    alignItems: "center",
    gap: 15,
    marginBottom: 30,
  },
  colorButton: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  selectedColorButton: {
    borderWidth: 3,
    borderColor: "#000",
  },
  doneButton: {
    backgroundColor: "#1952E294",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: "auto",
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
