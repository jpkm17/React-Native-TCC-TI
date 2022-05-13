import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { HomeScreen } from './src/screens/home/home';
import { NotificationsScreen } from './src/screens/notifications/notif';
import { Settings } from './src/screens/settings/settings';
import { Cadastro } from './src/screens/cadastro/cadastro';

import { Profile } from './src/screens/profile/profile'
import { Login } from './src/screens/login/login'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainDrawer() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              <Drawer.Screen name="Settings" component={Settings} />
              <Drawer.Screen name="Cadastro" component={Cadastro} />
          </Drawer.Navigator>
      </NavigationContainer>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App;