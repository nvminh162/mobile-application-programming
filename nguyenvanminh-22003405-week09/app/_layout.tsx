import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite';
import React from 'react';
import { setupDatabase } from '../utils/database';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="tasks.db" onInit={setupDatabase}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add-task"
          options={{
            headerShown: true,
            headerTitle: "Add Task",
            headerTitleStyle: {
              color: '#000',
            },
            headerLeft: () => (
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color="#000" 
                style={{ marginLeft: 16 }}
              />
            ),
          }}
        />
      </Stack>
    </SQLiteProvider>
  );
}
