import React, { useEffect, useState } from 'react'
import {Container, StyleProvider} from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouter'
import MainRouter from './src/routers/MainRouter'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onSaveToken} from './src/redux/actions/userActions'
import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor'
import material from './native-base-theme/variables/material'

const App = ({user,onSaveToken}) => {
  const [isStorageChecked,setIsStorageChecked] = useState(false)

  useEffect(() => {
    const getStorageData = () => {
      AsyncStorage.getItem('@token')
      .then((data) => {
        if(data){
          onSaveToken(data)
        }
        setIsStorageChecked(true)
      })
      .catch((err) => {
        console.log(err)
        setIsStorageChecked(true)
      })
    }

    getStorageData()
  },[])


  if(isStorageChecked === false){
    return(
      <SplashScreen />
    )
  }
  return(
    <NavigationContainer>
      <StyleProvider style={getTheme(material)}>
        <Container>
            {
              user.token !== '' ?
              <MainRouter />
              :
              <AuthRouter />
            }
        </Container>
      </StyleProvider>
    </NavigationContainer>
  )
}

const mapDispatchToProps = {
  onSaveToken
}

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);