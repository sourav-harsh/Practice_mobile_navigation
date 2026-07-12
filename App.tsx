// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeFreeSolid } from '@react-native-vector-icons/fontawesome-free-solid';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          cursor: 'pointer',
          backgroundColor: 'purple',
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="magnifying-glass" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
