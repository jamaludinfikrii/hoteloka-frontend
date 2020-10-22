import React, { useState } from 'react'
import {Container} from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouter'
import MainRouter from './src/routers/MainRouter'


const App = () => {
  const [user,setUser] = useState('fikri')

  return(
    <Container>
      <NavigationContainer>
        {
          user === null ?
          <AuthRouter />
          :
          <MainRouter />
        }
      </NavigationContainer>
    </Container>
  )
}

export default App;