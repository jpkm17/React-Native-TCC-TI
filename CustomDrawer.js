import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8B0000' }} >

                <ImageBackground
                    source={require('./assets/logo.png')}
                    style={{ padding: 50, height: 70, width: 70 }}>
                    <Image
                        source={require('./assets/logo.png')}
                        style={{ heigth: 20, width: 20, borderRadius: 5 }} />
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