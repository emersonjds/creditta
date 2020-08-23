import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import PayOrder from './pages/PayOrder';
import PayOrderForMe from './pages/PayOrderForMe';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PayOrderForMe"
        component={PayOrderForMe}
        options={{
          title: 'Solicitar Pagamento',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PayOrder"
        component={PayOrder}
        options={{
          headerShown: true,
          title: 'Pagando um boleto',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
        }}
      />
    </Stack.Navigator>
  );
}
