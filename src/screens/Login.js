import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, H1, Header, Right, Body, Title, Left } from 'native-base';

const Login = ({navigation}) => {
    return(
        <Container>
            <Header>
                <Right></Right>
                <Body>
                    <Title>Login</Title>
                </Body>
                <Left />
            </Header>
            <Content>
            <H1>Welcome Back</H1>
            <Text>Please login to your account!</Text>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>


                <Button block>
                    <Text>Sign In</Text>
                </Button>

                
                <Text onPress={() => navigation.navigate('register')}>Don't Have Account ? Register Here</Text>
            </Content>
        </Container>
    )
}

export default Login;