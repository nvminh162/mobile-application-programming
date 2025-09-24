import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

// Context đơn giản để chia sẻ state Settings
const AppCtx = React.createContext();

function HomeScreen() {
  const { darkMode } = React.useContext(AppCtx);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
      backgroundColor: darkMode ? '#111' : '#f7f8fa' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: darkMode ? '#fff' : '#111' }}>
        Home Screen
      </Text>
    </View>
  );
}

function ProfileScreen() {
  const { darkMode } = React.useContext(AppCtx);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
      backgroundColor: darkMode ? '#111' : '#f7f8fa', padding: 16 }}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/200?img=23' }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 12 }}
      />
      <Text style={{ fontSize: 18, fontWeight: '700', color: darkMode ? '#fff' : '#111' }}>
        Nguyen Van Minh
      </Text>
      <Text style={{ fontSize: 14, color: darkMode ? '#bbb' : '#666' }}>
        @nvminh162
      </Text>
    </View>
  );
}

function SettingsScreen() {
  const { darkMode, setDarkMode, notifications, setNotifications } = React.useContext(AppCtx);
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: darkMode ? '#111' : '#f7f8fa' }}>
      <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        padding: 14, backgroundColor: darkMode ? '#1e1e1e' : '#fff', borderRadius: 12, marginBottom: 12,
        shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 1
      }}>
        <Text style={{ fontSize: 16, color: darkMode ? '#fff' : '#111' }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        padding: 14, backgroundColor: darkMode ? '#1e1e1e' : '#fff', borderRadius: 12,
        shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 1
      }}>
        <Text style={{ fontSize: 16, color: darkMode ? '#fff' : '#111' }}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <AppCtx.Provider value={{ darkMode, setDarkMode, notifications, setNotifications }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
            drawerActiveTintColor: '#007aff',
            drawerInactiveTintColor: '#666',
            drawerIcon: ({ focused, color, size }) => {
              let name = 'home-outline';
              if (route.name === 'Home') name = focused ? 'home' : 'home-outline';
              if (route.name === 'Profile') name = focused ? 'person' : 'person-outline';
              if (route.name === 'Settings') name = focused ? 'settings' : 'settings-outline';
              return <Ionicons name={name} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppCtx.Provider>
  );
}
