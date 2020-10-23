import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, H1, Header, Right, Body, Title, Left } from 'native-base';
import { connect } from 'react-redux';

const Login = ({navigation,bebas}) => {
    return(
        <Container>
            <Header>
                <Right></Right>
                <Body>
                    <Title>Login {bebas.counter}</Title>
                </Body>
                <Left />
            </Header>
            <Content>
            <H1>Welcome Back</H1>
            <Text>Please login to your account!</Text>
                <Form>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
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

const mapStateToProps = (state) => {
    return{
        bebas : state
    }
}

export default connect(mapStateToProps)(Login);