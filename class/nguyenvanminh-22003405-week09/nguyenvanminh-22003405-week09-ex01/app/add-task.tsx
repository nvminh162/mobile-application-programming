import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addTaskAsync } from '../utils/database';

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const db = useSQLiteContext();

  const handleFinish = async () => {
    if (taskTitle.trim()) {
      await addTaskAsync(db, taskTitle);
      router.replace({
        pathname: "/home",
        params: { refresh: Date.now() }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          placeholderTextColor="#666"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MANAGE YOUR TASK</Text>
      </View>

      <View style={styles.taskInfo}>
        <View style={styles.noteIcon}>
          <Ionicons name="pencil" size={40} color="#B8860B" />
        </View>
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH ►</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B4EFF',
  },
  taskInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteIcon: {
    width: 120,
    height: 120,
    backgroundColor: '#FFE5A3',
    borderRadius: 12,
  },
  finishButton: {
    backgroundColor: '#00BFA6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});