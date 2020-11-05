import React from 'react'
import {Container,Content,Card,Text, CardItem, H1, H2} from 'native-base'
import { Button } from 'react-native'

const BookSummary = () => {
    return(
        <Container>
            <Content>
                <Card style={{marginTop : 50}}>
                    
                    <CardItem style={{flexDirection:  "column",justifyContent : "flex-start",alignItems : "flex-start"}}>
                        <H2>Booking Summary</H2>
                        <Text>Fullname</Text>
                        <Text>adddress</Text>
                        <Text>phone</Text>
                    </CardItem>
                    <CardItem style={{flexDirection:  "column",justifyContent : "flex-start",alignItems : "flex-start"}}>
                        <H2>Hotels</H2>
                        <Text>name</Text>
                        <Text>address</Text>
                        <Text>star</Text>
                    </CardItem>
                    <CardItem style={{flexDirection:  "column",justifyContent : "flex-start",alignItems : "flex-start"}}>
                        <H2>Rooms</H2>
                        <Text>name</Text>
                        <Text>start date</Text>
                        <Text>end date</Text>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem style={{flexDirection : 'column'}}>
                        <Button title='Pay now !!' />
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
} 

export default BookSummary;