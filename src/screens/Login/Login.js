import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, H1, Header, Right, Body, Title, Left } from 'native-base';
import { connect } from 'react-redux';
import { onEmailChange,onPasswordChange,onLoginClick } from '../../redux/actions/userActions';

const Login = ({navigation,user,onEmailChange,onPasswordChange,onLoginClick}) => {

    
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
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize="none" value={user.email} onChangeText={onEmailChange} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input autoCapitalize="none" value={user.password} onChangeText={onPasswordChange} />
                    </Item>
                </Form>
                <Text>
                    {
                        user.error && user.error
                    }
                </Text>
                <Button disabled={user.loading} block onPress={() => onLoginClick(user.email,user.password)}>
                    <Text>Sign In</Text>
                </Button>

                
                <Text onPress={() => navigation.navigate('register')}>Don't Have Account ? Register Here</Text>
            </Content>
        </Container>
    )
}

const mapStateToProps = (store) => {
    return {
        user : store.user
    }
}


export default connect(mapStateToProps,{onEmailChange,onPasswordChange,onLoginClick})(Login);