import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import BookSummary from '../screens/BookSummary/BookSummary'
import Home from '../screens/Home/Home'
import HotelDetail from '../screens/HotelDetail/HotelDetail'


const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='hotelDetail' component={HotelDetail} />
            <Stack.Screen name='book-summary' component={BookSummary} />
        </Stack.Navigator>
    )
}