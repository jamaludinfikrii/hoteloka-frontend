import React from 'react'
import {Container,Content,Footer,Button, Header, Left, Icon, Body, Right, Title,Text} from 'native-base'
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const App = () => {
  return(
    <Container>
      <Header>
        <Right>
         
        </Right>
        <Body>
          <Title>Login Page</Title>
        </Body>
        <Left>

        </Left>
      </Header>
      <Login />
    </Container>
  )
}

export default App;