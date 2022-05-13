import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';



import { HomeScreen } from './src/screens/home/home';
import { NotificationsScreen } from './src/screens/notifications/notif';
import { Settings } from './src/screens/settings/settings';
import {Cadastro} from './src/screens/cadastro/cadastro';

import { Profile } from './src/screens/profile/profile'
import {Login} from './src/screens/login/login'





// function Login({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Image source={ganes} style={styles.logo} />
//       <Text style={styles.login}>LOGIN</Text>

//       <TextInput
//         style={styles.input1}
//         placeholder="Digite seu Email"
//       />

//       <TextInput
//         style={styles.input2}
//         placeholder="Digite sua Senha"
//       />

//       <Button
//         color="#a80601"
//         onPress={() => navigation.navigate('MainDrawer')}
//         title="Logar"
//         style={styles.button}
//       />
//       <Text>{'\n'}</Text>

//       <Button
//         title="Cadastro"
//         onPress={() => navigation.navigate('Cadastro')}
//         style={styles.button}
//       /> 
//     </View>
//   );
// }

// function Cadastro({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tela de cadastro</Text>

//       <Button
//         title="Go to MainDrawer"
//         onPress={() => navigation.navigate('MainDrawer')}
//       />
//     </View>
//   )
// }


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Cadastro" component={Cadastro} />
        </Drawer.Navigator>


        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="MainDrawer"
            component={MainDrawer}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        </Stack.Navigator> */}
      </NavigationContainer>

    // </View>
  )
}
