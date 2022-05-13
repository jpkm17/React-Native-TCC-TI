import * as React from 'react';
import { Button, View, Text, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export function Cadastro({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de cadastro</Text>
  
        <Button
          title="Go to MainDrawer"
          onPress={() => navigation.navigate('MainDrawer')}
        />
      </View>
    )
  }