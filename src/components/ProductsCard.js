import React from 'react'
import { Badge, Body, Button, Card, CardItem, Container, Content, H1, H3, Icon, Text, Title } from 'native-base'
import {Image} from 'react-native'
import { URL_API } from '../supports/constants/urlApi'
export default ProductCard = ({index,url,name,price}) => {
    return (
        <Card key={index}>
            <CardItem>
                <Image source={{uri: URL_API + '/public/hotel-images/' + url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                    <H3>
                        {name}
                    </H3>
                    <Text colo>
                        Rp.{price.toLocaleString('id-ID')}
                    </Text>
                    
                </Body>
            </CardItem>
        </Card>
        )
}