import { Button, Container, Content, Text, Title } from 'native-base'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getAllHotels} from './../../redux/actions/hotelActions'

const Home = ({hotels,user,getAllHotels}) => {

    useEffect(() => {
        getAllHotels()
    },[])


    return(
        <Container>
            <Content>
                
                
            </Content>
        </Container>
        
    )
}
const mapStateToProps = (state) => {
    return{
        hotels : state.hotels,
        user : state.user
    }
}

const mapDispatchToProps = {getAllHotels}

export default connect(mapStateToProps,mapDispatchToProps)(Home);