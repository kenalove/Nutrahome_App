import 'react-native-gesture-handler';
import React from 'react';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import Nutritionist from './Nutritionist'
import Meals from './Meals'
import Cart from './Cart'
import UserProfile from './UserProfile'

const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: '#ea0505', inactiveTintColor: '#C0C0C0', showLabel: true,
        style: { height: 70 }, tabStyle: { marginTop:8, height: 50, backgroundColor: '#ffffff' },
    }}>
        
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home-outline' type='ionicon' color={color} size={30}/>
          ),
        }}
        />

        <Tab.Screen name="Nutritionist" component={Nutritionist} 
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon name='chatbox-ellipses-outline' type='ionicon' color={color} size={30}/>
          ),
        }}
        />

        <Tab.Screen name="Meals" component={Meals} 
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({ color, size }) => (
            <Icon name='document-text-outline' type='ionicon' color={color} size={30}/>
          ),
        }}
        />

        <Tab.Screen name="Chat" component={Cart} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon name='cart-outline' type='ionicon' color={color} size={30}/>
          ),
        }}
        />

        <Tab.Screen name="UserProfile" component={UserProfile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person-outline' type='ionicon' color={color} size={30}/>
          ),
        }}
        />

    </Tab.Navigator>
    )
};

export default MainApp;