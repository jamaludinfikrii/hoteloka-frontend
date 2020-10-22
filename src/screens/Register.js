import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, H1 } from 'native-base';

const Register = () => {
    return(
        <Container>
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

                
                <Text>Don't Have Account ? Register Here</Text>
            </Content>
        </Container>
    )
}

export default Register;