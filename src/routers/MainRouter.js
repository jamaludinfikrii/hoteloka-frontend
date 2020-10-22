import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Saved from '../screens/Saved/Saved'
import MyBooking from '../screens/MyBooking/MyBooking'
import MyInbox from '../screens/MyInbox/MyInbox'
import MyAccount from '../screens/MyAccount/MyAccount'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='saved' component={Saved} />
            <Tab.Screen name='mybooking' component={MyBooking} />
            <Tab.Screen name='myinbox' component={MyInbox} />
            <Tab.Screen name='myaccount' component={MyAccount} />
        </Tab.Navigator>
    )
}

export default MainRouter;