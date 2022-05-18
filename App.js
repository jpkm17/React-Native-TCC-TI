// import * as React from 'react';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';

// import { HomeScreen } from './src/screens/home/home';
// import { NotificationsScreen } from './src/screens/notifications/notif';
// import { Settings } from './src/screens/settings/settings';
// import { Cadastro } from './src/screens/cadastro/cadastro';

// import { Profile } from './src/screens/profile/profile'
// import { Login } from './src/screens/login/login'


// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function MainDrawer() {
//   return (
//       <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Home">
//               <Drawer.Screen name="Home" component={HomeScreen} />
//               <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//               <Drawer.Screen name="Settings" component={Settings} />
//               <Drawer.Screen name="Cadastro" component={Cadastro} />
//           </Drawer.Navigator>
//       </NavigationContainer>
//   )
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="MainDrawer"
//           component={MainDrawer}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//         <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }
// export default App;


import * as React from 'react';

import CustomDrawer from './CustomDrawer';

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Text>{'\n'}</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const Drawer = createDrawerNavigator();
function MainDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props}/>} >
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
      </Drawer.Navigator>
    )
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back Home" />
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to MainDrawer"
        onPress={() => navigation.navigate('MainDrawer')}
      />

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('cadastro')}
      />
    </View>
  );
}

function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Text>Tela de cadastro</Text>

      <Button
        title="Go to MainDrawer"
        onPress={() => navigation.navigate('MainDrawer')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();
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
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;