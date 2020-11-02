import { ActionSheet, Badge, Body, Button, Card, CardItem, Container, Content, H1, H3, Icon, Text, Title } from 'native-base'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import ProductsCard from '../../components/ProductsCard'
import { URL_API } from '../../supports/constants/urlApi'
import {getAllHotels,sortHotelByPriceAsc} from './../../redux/actions/hotelActions'

const Home = ({hotels,user,getAllHotels,sortHotelByPriceAsc,navigation}) => {

    useEffect(() => {
        getAllHotels()
    },[])

    

    const renderData = () => {
        return hotels.data.map((val,index) => {
            return(
              <ProductsCard 
                key={index} 
                onPress={() => {navigation.navigate('hotel-detail',{id: val.id})}} 
                index={index} 
                name={val['name']} 
                price={val.price} 
                url={val.url} 
            />
            )
        })
    }

    if(hotels.data === null){
        return (
            <Container>
                <Content>
                    <Text>Loading ...</Text>
                
                </Content>
            </Container>
        )
    }
    return(
        <Container>
            <Content>
                <H1>Find Hotel Near You ..</H1>
                <Text onPress={sortHotelByPriceAsc}>Sort By</Text> 
                {renderData()}
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

const mapDispatchToProps = {getAllHotels,sortHotelByPriceAsc}

export default connect(mapStateToProps,mapDispatchToProps)(Home);