import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductDetail() {
  const product = {
    name: 'Pina Mountain',
    originalPrice: 449,
    discountPrice: 350,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png'), // Replace with the correct image path
    discount: 15, // 15% OFF
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      {/* Product Image */}
      <Image
        source={product.image}
        style={{ width: '100%', height: 300, borderRadius: 10, marginBottom: 20 }}
        resizeMode="contain"
      />
      
      {/* Product Name and Discount */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
          {product.name}
        </Text>
        <Text style={{ fontSize: 18, color: '#FF5722', marginBottom: 5 }}>
          {product.discount}% OFF | {product.discountPrice}$
        </Text>
        <Text style={{ fontSize: 16, textDecorationLine: 'line-through', color: '#888' }}>
          {product.originalPrice}$
        </Text>
      </View>

      {/* Product Description */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
        <Text style={{ fontSize: 14, color: '#555', lineHeight: 20, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 5, padding: 10, backgroundColor: '#F9F9F9' }}>
          {product.description}
        </Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#F44336',
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Heart Icon (Wishlist) */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Text style={{ fontSize: 30 }}>💖</Text>
      </TouchableOpacity>
    </View>
  );
}
