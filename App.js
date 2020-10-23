import React from 'react'
import {Container} from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouter'
import MainRouter from './src/routers/MainRouter'
import { connect } from 'react-redux'



const App = ({user}) => {
  return(
    <NavigationContainer>
      <Container>
          {
            user.token !== '' ?
            <MainRouter />
            :
            <AuthRouter />
          }
      </Container>
    </NavigationContainer>
  )
}


const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(App);