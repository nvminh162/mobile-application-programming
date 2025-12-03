import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskItem from '../../components/TaskItem';
import { TaskEntity, deleteTaskAsync, getAllTasksAsync, updateTaskStatusAsync } from '../../utils/database';

export default function Home() {
  const { username, refresh } = useLocalSearchParams();
  const db = useSQLiteContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingTasks, setPendingTasks] = useState<TaskEntity[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskEntity[]>([]);

  const refreshTasks = useCallback(async () => {
    const tasks = await getAllTasksAsync(db);
    setPendingTasks(tasks.pending);
    setCompletedTasks(tasks.completed);
  }, [db]);

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks, refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle" size={40} color="#666" />
          <View style={styles.userText}>
            <Text style={styles.greeting}>Hi {username}</Text>
            <Text style={styles.subGreeting}>Have you fire day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.taskList}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Tasks</Text>
          {pendingTasks
            .filter(task => 
              task.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(task => (
              <TaskItem 
                key={task.id}
                title={task.title}
                onPress={async () => {
                  await updateTaskStatusAsync(db, task.id, true);
                  await refreshTasks();
                }}
              />
            ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed Tasks</Text>
          {completedTasks
            .filter(task => 
              task.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(task => (
              <TaskItem 
                key={task.id}
                title={task.title}
                completed
                onPress={async () => {
                  await deleteTaskAsync(db, task.id);
                  await refreshTasks();
                }}
              />
            ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Link href="/add-task" asChild>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>GET STARTED +</Text>
          </TouchableOpacity>
        </Link>
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
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  taskList: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#6B4EFF',
  },
  footer: {
    marginTop: 16,
  },
  addButton: {
    backgroundColor: '#00BFA6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});