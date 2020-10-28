import { Button, Container, Content, Text, Title } from 'native-base'
import React from 'react'
import { connect } from 'react-redux'

const Home = ({hotels}) => {
    console.log(hotels)
    return(
        <Container>
            <Content>
                <Text>Ini Home</Text>
                
            </Content>
        </Container>
        
    )
}
const mapStateToProps = (state) => {
    return{
        hotels : state.hotels
    }
}

export default connect(mapStateToProps)(Home);