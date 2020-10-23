import React, { useState } from 'react'
import {Container} from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouter'
import MainRouter from './src/routers/MainRouter'


const App = () => {
  const [user,setUser] = useState(null)

  return(
    <NavigationContainer>
      <Container>
          {
            user === null ?
            <AuthRouter />
            :
            <MainRouter />
          }
      </Container>
    </NavigationContainer>
  )
}

export default App;