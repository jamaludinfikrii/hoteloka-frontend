import { Container, Content, H1, Text, View,Card,CardItem,Body } from 'native-base'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { URL_API } from '../../supports/constants/urlApi'
import {getHotelDetailById} from './../../redux/actions/hotelDetailActions'

const HotelDetail = ({getHotelDetailById,data,route,filterDate}) => {

    useEffect(() => {
        let date = filterDate
        let tanggal = date.getDate()
        tanggal = tanggal > 9 ? tanggal : '0'+tanggal
        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + tanggal

        getHotelDetailById(route.params.id,date)
    },[])

    const renderStar = (countStar) => {
        let output = []
        for(var i = 0 ; i < countStar ; i ++){
            output.push(
                <Icon key={i} name='star' style={{color : "orange"}} />
            )
        }

        return output
    }





    if(data.data === null){
        return(
            <Container>
                <Content>
                    <Text>
                        Loading ....
                    </Text>
                </Content>
            </Container>
        )
    }
    
    return(
        <Container>
            <Image 
                style={{height : 250,resizeMode:'cover'}}
                source={{uri : URL_API + '/public/hotel-images/' + data.data.hotelImages[0].url}}
            />
            <Content>

                {/* Hotel Info */}
                <H1 style={{marginTop:20}}>{data.data ? data.data.hotels.name  : "loading..."}</H1>
                <View style={{flexDirection : "column"}}>
                    <Text style={{fontSize:14, color : "#b3b3b3",fontWeight:'bold',marginRight : 20}}>
                        <Icon name='map-marker' style={{marginRight : 20}}/>
                        <Text  style={{fontSize:14, color : "#b3b3b3",fontWeight:'bold'}}> {data.data.hotels.address} </Text> 
                    </Text>
                    <Text style={{fontSize:14, color : "#b3b3b3",fontWeight:'bold'}}>
                        <Icon name='phone' style={{marginRight : 20}}/>
                        <Text  style={{fontSize:14, color : "#b3b3b3",fontWeight:'bold'}}> {data.data.hotels.phone} </Text> 
                    </Text>
                </View>
                <View style={{marginTop :5,display:'flex',flexDirection : "row"}}>
                    {
                        renderStar(data.data.hotels.star)
                    }
                   
                   
                </View>
                
                {/* Hotel Facilities */}
                <View>

                </View>

                {/* List Rooms */}

                {
                    data.data.rooms.map((val) => {
                        return(
                                <Card key={val.id}  style={{marginTop : 25}}> 
                                    <CardItem>
                                        <View style={{flexDirection : "row"}}>
                                            <Image source={{uri:URL_API + "/public/room-images/" + val.room_image.split(',')[0]}} style={{height : 100,width : 100,marginRight : 20}}  />
                
                                            <View>
                                                <Text>
                                                    {val.name}
                                                </Text>
                                                <Text style={{color:"#b3b3b3",fontWeight: "bold",fontSize : 14}}>
                                                    Rp. {val.price.toLocaleString('id-ID')}
                                                </Text>
                                                <Text style={{color:"#b3b3b3",fontWeight: "bold",fontSize : 14}}>
                                                   {val.room_left} room(s) available
                                                </Text>
                                                
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                    })
                }
                
               


            </Content>

        </Container>
    )
}

const mapDispatchToProps = {getHotelDetailById}

const mapStateToProps = (state) => {
    return{
        data : state.hotelDetail,
        filterDate : state.hotels.filterDate
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotelDetail);