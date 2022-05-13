import * as React from 'react';
import { Button, View, Text} from 'react-native';



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