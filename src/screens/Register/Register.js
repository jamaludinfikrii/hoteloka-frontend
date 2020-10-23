import React, { useState } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, H1, Right, Left, Body, Title } from 'native-base';
import Axios from 'axios';
import { URL_API } from '../../supports/constants/urlApi';
import {connect} from 'react-redux'
import {addCounter,minCounter} from './../../redux/actions/counterActions'

const Register = ({navigation,bebas,addCounter,minCounter}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const onBtnSignIn = () => {
        try {
            if(!email || !password) throw new Error("Username and password must be filled")
            Axios.post(URL_API + '/auth/register',{email,password})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        } catch (error) {
            
        }
    }


    return(
        <Container>
            <Header>
                <Right></Right>
                <Body>
                    <Title>Register {bebas.counter}</Title>
                </Body>
                <Left />
            </Header>
            <Content>
                <H1 onPress={addCounter}>Register Here</H1>
                <H1 onPress={minCounter}>Register Here</H1>
                <Form>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input value={email} onChangeText={(text) => setEmail(text.toLowerCase())} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input value={password} onChangeText={(text)=> setPassword(text)}/>
                    </Item>
                </Form>


                <Button onPress={onBtnSignIn} block>
                    <Text>Sign In</Text>
                </Button>

                
                <Text onPress={() => navigation.navigate('login')}>Already have account ? Login Here</Text>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    addCounter : addCounter,
    minCounter : minCounter
}

const mapStateToProps = (state) => {
    return{
        bebas : state
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Register);



// app ios ==> simulator (iphone) ==> ip macbook 
// backend ==> macbook 



// react ==> macbook ==> localhost:4000
// backend ==> macbook