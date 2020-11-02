import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Saved from '../screens/Saved/Saved'
import MyBooking from '../screens/MyBooking/MyBooking'
import MyInbox from '../screens/MyInbox/MyInbox'
import MyAccount from '../screens/MyAccount/MyAccount'
import HomeRouter from './HomeRouter'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor : "#b3b3b3",
                style: {
                   paddingBottom : 25,
                   height : 80
                },
                labelStyle : {
                    textTransform : "capitalize"
                }
                
            }}
        >
            <Tab.Screen 
                name='home' 
                component={HomeRouter} 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='home' size={props.size} color={props.color} />
                    )
                }}}
            />
            <Tab.Screen 
                name='saved' 
                component={Saved} 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='heart' size={props.size} color={props.color} />
                    )
                }}}
            />
            <Tab.Screen 
                name='mybooking' 
                component={MyBooking} 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='bookmark' size={props.size} color={props.color} />
                    )
                }}}
            />
            <Tab.Screen 
                name='myinbox' 
                component={MyInbox} 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='envelope' size={props.size} color={props.color} />
                    )
                }}}
            />
            <Tab.Screen 
                name='myaccount' 
                component={MyAccount} 
                options={{tabBarIcon : (props) => {
                    return(
                        <Icon name='user' size={props.size} color={props.color} />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}

export default MainRouter;