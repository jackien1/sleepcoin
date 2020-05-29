import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import Shop from './screens/Shop';
import Profile from './screens/Profile';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'purple',
                inactiveTintColor: 'white',
                style: { backgroundColor: '#181818' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="shopping-cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="face" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{ header: () => null }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Router;
