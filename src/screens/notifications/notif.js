import * as React from 'react';
import { Button, View, Text, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notifications Screen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }