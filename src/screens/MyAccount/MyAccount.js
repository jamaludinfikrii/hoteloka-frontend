import { Button, Container, Content, H1, Text } from 'native-base'
import React, { useState } from 'react'
import {onLogotCLick} from './../../redux/actions/userActions'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-picker';
import { Image } from 'react-native';

const MyAccount = ({onLogotCLick}) => {
    const [photo,setPhoto] = useState(null)

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
             
              setPhoto({uri : response.uri,type : response.type,filename : response.fileName})
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
                {
                    photo &&
                    <Image 
                        source={{uri : photo.uri}}
                        style={{width : 200,height : 200}}
                    />

                }
                {
                    photo &&
                    <Button>
                        <Text>Save</Text>
                    </Button>
                }
            </Content>
        </Container>
        
    )
}
const mapDispatchToProps = {onLogotCLick}


export default connect(null,mapDispatchToProps)(MyAccount);