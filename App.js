// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import { TextInput } from 'react-native-gesture-handler';

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
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Home" component={HomeScreen} />
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
        onPress={() => navigation.navigate('Cadastro')}
      />

      <Button
        title="Consultar cep"
        onPress={() => navigation.navigate('Cep')}
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

function Profiles() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Cep({ navigation }) {
  const [viacep, setViacep] = useState([]);
  const [number, onChangeNumber] = useState(null);

  const getViacep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${number}/json/`);
      const json = await response.json();
      setViacep(json);
      console.log(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite o CEP"
        keyboardType='Numeric'
      />
      <Button style={{ color: 'red', with: '40%' }} title="Confirmar" onPress={getViacep} />

      <Text>Localidade: {viacep.localide}</Text>
      <Text>Logradouro: {viacep.logradouro}</Text>
      <Text>Bairro: {viacep.bairro}</Text>
      <Text>UF: {viacep.uf}</Text>
      <Text>CEP: {number}</Text>
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
        <Stack.Screen name="Cep" component={Cep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;