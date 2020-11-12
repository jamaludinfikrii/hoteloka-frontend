import React, { useEffect } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Saved from '../screens/Saved/Saved'
import MyBooking from '../screens/MyBooking/MyBooking'
import MyInbox from '../screens/MyInbox/MyInbox'
import MyAccount from '../screens/MyAccount/MyAccount'
import HomeRouter from './HomeRouter'
import Icon from 'react-native-vector-icons/FontAwesome'
import OneSignal from 'react-native-onesignal'; 
import {connect} from 'react-redux'

const Tab = createBottomTabNavigator()
const MainRouter = ({token}) => {
    useEffect(() => {
        OneSignal.setLogLevel(6, 0);
  
        // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
        OneSignal.init("4d8e89c1-14ee-497e-a2a0-f6526cf4b285", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
        OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
        
        // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
        // OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

        OneSignal.addEventListener('received', onReceived);
        OneSignal.addEventListener('opened', onOpened);
        OneSignal.addEventListener('ids', onIds);
        console.log(token)
        OneSignal.setExternalUserId(token , (results) => {
              // The results will contain push and email success statuses
            console.log('Results of setting external user id');
            console.log(results);
            
            // Push can be expected in almost every situation with a success status, but
            // as a pre-caution its good to verify it exists
            if (results.push && results.push.success) {
                console.log('Results of setting external user id push status:');
                console.log(results.push.success);
            }
            
            // Verify the email is set or check that the results have an email success status
            if (results.email && results.email.success) {
                console.log('Results of setting external user id email status:');
                console.log(results.email.success);
            }
        })

        // unmount
        return () => {
            OneSignal.removeEventListener('received', onReceived);
            OneSignal.removeEventListener('opened', onOpened);
            OneSignal.removeEventListener('ids', onIds);
        }
    })


    const onReceived = (notification) => {
        console.log("Notification received: ", notification);
      }
    
    const onOpened = (openResult) => {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    const onIds = (device) => {
        console.log('Device info: ', device);
    }


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
                name='hommy' 
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

const mapStateToProps = (state) => {
    return{
        token : state.user.token
    }
}

export default connect(mapStateToProps)(MainRouter);