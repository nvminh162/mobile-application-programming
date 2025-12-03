import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AddTask() {
  const [job, setJob] = useState("");
  const router = useRouter();
  const params = useLocalSearchParams();
  const userName = params.userName || "Twinkle";

  const handleFinish = async () => {
    if (job.trim()) {
      try {
        const savedTasks = await AsyncStorage.getItem("tasks");
        const tasks = savedTasks ? JSON.parse(savedTasks) : [];
        
        const newTask = {
          id: Date.now().toString(),
          title: job,
          completed: false,
        };
        
        tasks.push(newTask);
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
        
        router.back();
      } catch (error) {
        console.error("Error saving task:", error);
      }
    }
  };

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

      <View style={styles.content}>
        <Text style={styles.title}>ADD YOUR JOB</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.icon}>📋</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your job"
            placeholderTextColor="#999"
            value={job}
            onChangeText={setJob}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>FINISH →</Text>
        </TouchableOpacity>

        <View style={styles.noteImageContainer}>
          <Text style={styles.noteImagePlaceholder}>📝</Text>
        </View>
      </View>
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
    marginBottom: 40,
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
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 40,
    width: "100%",
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#00BDD6",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  noteImageContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  noteImagePlaceholder: {
    fontSize: 100,
  },
});
