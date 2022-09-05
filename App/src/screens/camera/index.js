import React, { Component } from 'react';

//React Native Components
import {
    ImageBackground,
    Image,
    Switch,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Icons
import IconCamera from '../../assets/icons/photo.png';

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
          };
    }

    //Listener depending of the option
    _clickEventListener(key) {
        if (key == 1){
        }
    }

    render() {
        return (
            <ImageBackground    resizeMode="contain">
                <TouchableOpacity   onPress={() => this._clickEventListener(1)} >
                    <Image  style = {styles.cameraButton} 
                            source = {IconCamera}/>
                </TouchableOpacity> 
            </ImageBackground>
        );
    }
}