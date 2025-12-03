import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Href } from "expo-router";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const params = useLocalSearchParams();
  const userName = params.userName || "Twinkle";

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleAddTask = () => {
    router.push(`/add-task?userName=${encodeURIComponent(userName as string)}` as Href);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTask(item.id)}
      >
        <Text style={styles.checkboxIcon}>
          {item.completed ? "✓" : ""}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>
        {item.title}
      </Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.editIcon}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi {userName}</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
        contentContainerStyle={styles.taskListContent}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 60,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#E0E0E0",
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 12,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  taskList: {
    flex: 1,
  },
  taskListContent: {
    paddingHorizontal: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DEE1E678",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#00BDD6",
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkboxIcon: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  editButton: {
    padding: 5,
  },
  editIcon: {
    fontSize: 18,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "300",
  },
});
