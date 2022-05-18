import React from 'react'
import { View, Text, ImageBackground, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

 const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8B0000' }} >
                <ImageBackground source={require('./assets/logo.png')}
                    style={{ padding: 20, heigth:80, width:80 }}>
                    <Image source={require('./assets/icon.png')} style={{heigth:80, width:80, borderRadius:40, marginBottom: 10}}/>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View>
                <Text>Our custom Text</Text>
            </View>
        </View >
    )
}
export default CustomDrawer;