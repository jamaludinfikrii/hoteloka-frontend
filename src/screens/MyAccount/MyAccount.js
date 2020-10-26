import { Button, Container, Content, Text } from 'native-base'
import React from 'react'
import {onLogotCLick} from './../../redux/actions/userActions'
import {connect} from 'react-redux'

const MyAccount = ({onLogotCLick}) => {
    return(
        <Container>
            <Content>
                <Text>Ini MyAccount</Text>
                <Button rounded danger onPress={onLogotCLick}>
                    <Text>Logout</Text>
                </Button>
            </Content>
        </Container>
        
    )
}
const mapDispatchToProps = {onLogotCLick}


export default connect(null,mapDispatchToProps)(MyAccount);