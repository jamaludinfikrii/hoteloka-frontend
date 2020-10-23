import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, H1, Right, Left, Body, Title } from 'native-base';
import { connect } from 'react-redux';

const Register = ({navigation,user}) => {
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
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>


                <Button  block>
                    <Text>Sign In</Text>
                </Button>

                
                <Text onPress={() => navigation.navigate('login')}>Already have account ? Login Here</Text>
            </Content>
        </Container>
    )
}



const mapStateToProps = (state) => {
    return{
        user : state.user
    }
}



export default connect(mapStateToProps)(Register);



// app ios ==> simulator (iphone) ==> ip macbook 
// backend ==> macbook 



// react ==> macbook ==> localhost:4000
// backend ==> macbook