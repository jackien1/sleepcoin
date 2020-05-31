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
import TabBar from './components/TabBar';
import SleepDetails from './screens/SleepDetails';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props}></TabBar>}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={ProfileStackFunction} />
        </Tab.Navigator>
    );
}

const ProfileStack = createStackNavigator();

const ProfileStackFunction = () => (
    <ProfileStack.Navigator headerMode={null}>
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="SleepDetails" component={SleepDetails} />
    </ProfileStack.Navigator>
);

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
