import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home/Home'
import HotelDetail from '../screens/HotelDetail/HotelDetail'


const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='hotel-detail' component={HotelDetail} />
        </Stack.Navigator>
    )
}