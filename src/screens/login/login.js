import * as React from 'react';
import { Button, View, Text, Image, TextInput } from 'react-native';


import { styles } from '../styles/style';
import ganes from '../../../assets/logo.png';

export function Login({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={ganes} style={styles.logo} />
        <Text style={styles.login}>LOGIN</Text>
  
        <TextInput
          style={styles.input1}
          placeholder="Digite seu Email"
        />
  
        <TextInput
          style={styles.input2}
          placeholder="Digite sua Senha"
        />
  
        <Button
          color="#a80601"
          onPress={() => navigation.navigate('MainDrawer')}
          title="Logar"
          style={styles.button}
        />
        <Text>{'\n'}</Text>
        
        <Button
          color="#a80601"
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.button}
        /> 
      </View>
    );
  }