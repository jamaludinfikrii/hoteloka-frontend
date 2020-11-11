import { Button, Container, Content, H1, Text } from 'native-base'
import React from 'react'
import {onLogotCLick} from './../../redux/actions/userActions'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-picker';

const MyAccount = ({onLogotCLick}) => {

    const onChangeImage = () => {
        ImagePicker.showImagePicker({ storageOptions: { privateDirectory: true } },(response) => {
            console.log('Response = ', response);
 
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
            }
        })
    }

    return(
        <Container>
            <Content>
                <H1>My Account</H1>
                <Button rounded danger onPress={onLogotCLick}>
                    <Text>Logout</Text>
                </Button>
                <Button rounded danger onPress={onChangeImage}>
                    <Text>Change Image Profile</Text>
                </Button>
            </Content>
        </Container>
        
    )
}
const mapDispatchToProps = {onLogotCLick}


export default connect(null,mapDispatchToProps)(MyAccount);