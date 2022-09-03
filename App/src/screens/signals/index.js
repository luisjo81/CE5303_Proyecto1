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
import BackgroundHouse from '../../assets/backgrounds/house.png';

//Icons
import IconLightOn from '../../assets/icons/lightOn.png';
import IconLightOff from '../../assets/icons/lightOff.png';

export default class Signals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Bathroom
            lightBathroomState: false,
            lightBathroomIcon : IconLightOff,
            //Kitchen
            lightKitchenState: false,
            lightKitchenIcon : IconLightOff,
            //Living Room
            lightLivingRoomState: false,
            lightLivingRoomIcon : IconLightOff,
            //Bedroom 1
            lightBedroom1State: false,
            lightBedroom1Icon : IconLightOff,
            //Bedroom 2
            lightBedroom2State: false,
            lightBedroom2Icon : IconLightOff,
          };
    }

    //Listener depending of the option
    _clickEventListener(key) {
        //Bathroom
        if (key == 1){
            if (this.state.lightBathroomState == true){
                this.setState({lightBathroomState: false});
                this.setState({lightBathroomIcon: IconLightOff});
            }
            else {
                this.setState({lightBathroomState: true});
                this.setState({lightBathroomIcon: IconLightOn});
            }
        }
        //Kitchen
        if (key == 2){
            if (this.state.lightKitchenState == true){
                this.setState({lightKitchenState: false});
                this.setState({lightKitchenIcon: IconLightOff});
            }
            else {
                this.setState({lightKitchenState: true});
                this.setState({lightKitchenIcon: IconLightOn});
            }
        }
        //Living Room
        if (key == 3){
            if (this.state.lightLivingRoomState == true){
                this.setState({lightLivingRoomState: false});
                this.setState({lightLivingRoomIcon: IconLightOff});
            }
            else {
                this.setState({lightLivingRoomState: true});
                this.setState({lightLivingRoomIcon: IconLightOn});
            }
        }
        //Bedroom 1
        if (key == 4){
            if (this.state.lightBedroom1State == true){
                this.setState({lightBedroom1State: false});
                this.setState({lightBedroom1Icon: IconLightOff});
            }
            else {
                this.setState({lightBedroom1State: true});
                this.setState({lightBedroom1Icon: IconLightOn});
            }
        }
        //Bedroom 1
        if (key == 5){
            if (this.state.lightBedroom2State == true){
                this.setState({lightBedroom2State: false});
                this.setState({lightBedroom2Icon: IconLightOff});
            }
            else {
                this.setState({lightBedroom2State: true});
                this.setState({lightBedroom2Icon: IconLightOn});
            }
        }
    }

    render() {
        return (
            <ImageBackground    style={styles.signalsScreenBackground} 
                                source={BackgroundHouse}   
                                resizeMode="contain"
                                >
                <TouchableOpacity   onPress={() => this._clickEventListener(1)} >
                    <Image  style = {styles.bathroomButton} 
                            source={this.state.lightBathroomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(2)} >
                    <Image  style = {styles.kitchenButton} 
                            source={this.state.lightKitchenIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(3)} >
                    <Image  style = {styles.livingRoomButton} 
                            source={this.state.lightLivingRoomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(4)} >
                    <Image  style = {styles.bedroom1Button} 
                            source={this.state.lightBedroom1Icon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(5)} >
                    <Image  style = {styles.bedroom2Button} 
                            source={this.state.lightBedroom2Icon}/>
                </TouchableOpacity>                
            </ImageBackground>
        );
    }
}