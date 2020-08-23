import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import PayOrder from './pages/PayOrder';
import PayOrderForMe from './pages/PayOrderForMe';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
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
        options={{headerShown: true, title: 'Pagando um boleto'}}
      />
      <Stack.Screen
        name="PayOrderForMe"
        component={PayOrderForMe}
        options={{headerShown: true, title: 'Solicitar Pagamento'}}
      />
    </Stack.Navigator>
  );
}
