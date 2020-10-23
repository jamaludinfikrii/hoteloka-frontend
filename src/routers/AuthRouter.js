import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'

const Stack = createStackNavigator()
const AuthRouter = () => {
    return(
        <Stack.Navigator headerMode={() => null}>
            <Stack.Screen name='register' component={Register} />
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
    )
}

export default AuthRouter;