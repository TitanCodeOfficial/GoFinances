import React from 'react';

import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider} from '../contexts/auth';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <NavigationContainer>
        <AuthProvider>
        <View style={{flex: 1}}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
          </View>
        </AuthProvider>
      </NavigationContainer>
  );
};

export default Router;
