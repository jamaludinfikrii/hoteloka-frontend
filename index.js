/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/redux/reducers/index'
import thunk from 'redux-thunk'
import React from 'react'

const store = createStore(rootReducer,applyMiddleware(thunk))
const Index = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Index);
