import React, { useState } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, H1, Right, Left, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import {onUserRegister} from './../../redux/actions/userActions'

const Register = ({navigation,user,onUserRegister}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onBtnClick = () => {
        onUserRegister(email,password)
    }

    console.log(user)

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
                        <Input value={email} onChangeText={(text)=> setEmail(text.toLowerCase())} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input value={password} onChangeText={(text) => setPassword(text)}/>
                    </Item>
                </Form>

                <Text>{user.error && user.error}</Text>
                <Button  onPress={onBtnClick} block>
                    <Text>Sign In</Text>
                </Button>

                
                <Text onPress={() => navigation.navigate('login')}>Already have account ? Login Here</Text>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return{
        user : state.user
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Register);



// app ios ==> simulator (iphone) ==> ip macbook 
// backend ==> macbook 



// react ==> macbook ==> localhost:4000
// backend ==> macbook