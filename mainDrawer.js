import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from './src/screens/home/home';
import { NotificationsScreen } from './src/screens/notifications/notif';
import { Settings } from './src/screens/settings/settings';
import { Cadastro } from './src/screens/cadastro/cadastro';

export function MainDrawer() {
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

// tem que finalizar essa navegação entre as telas