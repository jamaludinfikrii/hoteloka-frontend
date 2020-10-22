import React from 'react'
import {Container} from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouter'


const App = () => {
  return(
    <Container>
      <NavigationContainer>
        <AuthRouter />
      </NavigationContainer>
    </Container>
  )
}

export default App;