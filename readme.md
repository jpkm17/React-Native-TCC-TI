
npm install @react-navigation/native

expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

npm install @react-navigation/drawer

expo install react-native-gesture-handler react-native-reanimated

Add in file babel.config.js

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Login Screen</Text>
       <Button
         title="Go to MainDrawer"
         onPress={() => navigation.navigate('MainDrawer')}
       />
       <Text>{'\n'}</Text>

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      /> */}
    </View>


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
//   );
// }