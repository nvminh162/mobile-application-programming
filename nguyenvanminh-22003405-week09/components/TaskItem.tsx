import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TaskItemProps {
  title: string;
  dueDate?: string;
  completed?: boolean;
  onPress?: () => void;
}

export default function TaskItem({ title, dueDate, completed, onPress }: TaskItemProps) {
  return (
    <TouchableOpacity 
      style={completed ? [styles.container, styles.containerCompleted] : styles.container} 
      onPress={onPress}
    >
      <View style={styles.checkContainer}>
        <Ionicons 
          name={completed ? "checkmark-circle" : "checkmark-circle-outline"} 
          size={24} 
          color={completed ? "#1c9963" : "#00BFA6"} 
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={completed ? [styles.title, styles.titleCompleted] : styles.title}>
          {title}
        </Text>
        {dueDate && (
          <Text style={completed ? [styles.dueDate, styles.dueDateCompleted] : styles.dueDate}>
            {dueDate}
          </Text>
        )}
      </View>
      <Ionicons 
        name={completed ? "trash-outline" : "chevron-forward"} 
        size={24} 
        color={completed ? "#FF6B6B" : "#CCCCCC"} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  containerCompleted: {
    backgroundColor: '#E8F5E9',
  },
  checkContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  titleCompleted: {
    color: '#1c9963',
    textDecorationLine: 'line-through',
  },
  dueDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  dueDateCompleted: {
    color: '#88c399',
    textDecorationLine: 'line-through',
  },
});