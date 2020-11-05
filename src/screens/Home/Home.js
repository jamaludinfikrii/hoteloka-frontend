import { ActionSheet, Badge, Body, Button, Card, CardItem, Container, Content, H1, H3, Icon, Text, Title,DatePicker } from 'native-base'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import ProductsCard from '../../components/ProductsCard'
import { URL_API } from '../../supports/constants/urlApi'
import {getAllHotels,sortHotelByPriceAsc,onChangeDateHotelFilter, onChangeEndDateHotelFilter} from './../../redux/actions/hotelActions'
import DateTimePicker from '@react-native-community/datetimepicker';



const Home = ({hotels,user,getAllHotels,sortHotelByPriceAsc,navigation,onChangeDateHotelFilter,onChangeEndDateHotelFilter}) => {


    useEffect(() => {
        let date = hotels.filterDate
        let tanggal = date.getDate()
        tanggal = tanggal > 9 ? tanggal : '0'+tanggal
        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + tanggal

        let end = hotels.filterDateEnd
        let tanggalEnd = end.getDate()
        tanggalEnd = tanggalEnd > 9 ? tanggalEnd : '0'+tanggalEnd
        end = end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + tanggalEnd
        
        getAllHotels(date,end)
    },[hotels.filterDate])

    

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
                <DateTimePicker 
                    value={hotels.filterDate}
                    minimumDate={new Date()}
                    maximumDate={new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate() + 14)}
                    onChange={onChangeDateHotelFilter}
                    mode='date'
                />

                <DateTimePicker 
                    value={hotels.filterDateEnd}
                    minimumDate={hotels.filterDateEnd}
                    maximumDate={new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate() + 14)}
                    onChange={onChangeEndDateHotelFilter}
                    mode='date'
                />
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

const mapDispatchToProps = {getAllHotels,sortHotelByPriceAsc,onChangeDateHotelFilter,onChangeEndDateHotelFilter}

export default connect(mapStateToProps,mapDispatchToProps)(Home);