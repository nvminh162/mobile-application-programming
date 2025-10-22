import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const [username, setUsername] = useState('');

  const handleStart = () => {
    if (username.trim()) {
      router.push({
        pathname: "/home",
        params: { username }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, !username.trim() && styles.buttonDisabled]}
          onPress={handleStart}
          disabled={!username.trim()}
        >
          <Text style={styles.buttonText}>GET STARTED ►</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4EFF',
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00BFA6',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});