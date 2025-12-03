import { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const renderButton = (title, onPress, color = 'green') => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 3,
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
});