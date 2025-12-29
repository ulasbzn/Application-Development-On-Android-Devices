import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Ekranlarımızı içe aktarıyoruz
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Stack Navigator: Ana sayfa ve Detay sayfası arasındaki geçişi yönetir
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' }, // Başlık arka plan rengi
        headerTintColor: '#fff', // Başlık yazı rengi
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Gezi Rehberi' }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Mekan Detayı' }} 
      />
    </Stack.Navigator>
  );
}

// 2. Ana Uygulama Bileşeni: Alt Tab menüsünü ve genel yapıyı kurar
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Tab seviyesindeki başlığı gizle (Stack başlığı görünecek)
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Lab 5: İkonları ayarlama
            if (route.name === 'Explore') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* 'Explore' sekmesi bizim HomeStack (Home + Details) yapımızı içerir */}
        <Tab.Screen 
          name="Explore" 
          component={HomeStack} 
          options={{ title: 'Keşfet' }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Ayarlar', headerShown: true }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}