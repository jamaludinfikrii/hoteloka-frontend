import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, H1, Right, Left, Body, Title } from 'native-base';

const Register = ({navigation}) => {
    return(
        <Container>
            <Header>
                <Right></Right>
                <Body>
                    <Title>Register</Title>
                </Body>
                <Left />
            </Header>
            <Content>
                <H1>Register Here</H1>
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

                
                <Text onPress={() => navigation.navigate('login')}>Already have account ? Login Here</Text>
            </Content>
        </Container>
    )
}

export default Register;