import React from 'react'
import { Badge, Body, Button, Card, CardItem, Container, Content, H1, H3, Icon, Text, Title } from 'native-base'
import {Image} from 'react-native'
import { URL_API } from '../supports/constants/urlApi'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default ProductCard = ({index,url,name,price,onPress}) => {
    return (
        <Card key={index}>
            <TouchableOpacity onPress={onPress}>
                <CardItem>
                    <Image source={{uri: URL_API + '/public/hotel-images/' + url}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
            </TouchableOpacity>
            <CardItem>
                <Body>
                    <H3>
                        {name}
                    </H3>
                    <Text>
                        Rp.{price.toLocaleString('id-ID')}
                    </Text>
                    
                </Body>
            </CardItem>
        </Card>
        )
}