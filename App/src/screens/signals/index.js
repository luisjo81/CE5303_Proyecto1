import React, { Component } from 'react';

import {db } from '../../firebase-config'; 
import { doc, collection, getDocs, updateDoc } from 'firebase/firestore/lite';

//React Native Components
import {
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundHouse from '../../assets/backgrounds/house.png';


//Icons
import IconLightOn from '../../assets/icons/lightOn.png';
import IconLightOff from '../../assets/icons/lightOff.png';
import IconDoorOpenA from '../../assets/icons/doorOpenA.png';
import IconDoorOpenB from '../../assets/icons/doorOpenB.png';
import IconDoorOpenC from '../../assets/icons/doorOpenC.png';
import IconDoorClosedA from '../../assets/icons/doorClosedA.png';
import IconDoorClosedB from '../../assets/icons/doorClosedB.png';
import IconDoorClosedC from '../../assets/icons/doorClosedC.png';

export default class Signals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Doors-------------------------------
            //Bathroom
            doorBathroomState: null,
            doorBathroomIcon: null,
            //Bedroom 1
            doorBedroom1State: null,
            doorBedroom1Icon : null,
            //Bedroom 2
            doorBedroom2State: null,
            doorBedroom2Icon : null,
            //Front
            doorFrontState: null,
            doorFrontIcon : null,
            //Back
            doorBackState: null,
            doorBackIcon : null,
            //Lights------------------------------
            //Bathroom
            lightBathroomState: null,
            lightBathroomIcon : null,
            //Kitchen
            lightKitchenState: null,
            lightKitchenIcon : null,
            //Living Room
            lightLivingRoomState: null,
            lightLivingRoomIcon : null,
            //Bedroom 1
            lightBedroom1State: null,
            lightBedroom1Icon : null,
            //Bedroom 2
            lightBedroom2State: null,
            lightBedroom2Icon : null
            //------------------------------------
        };

        const GetDoorsState = async () => {
            const doorsCol = collection(db, 'doors');
            const doorsSnapshot = await getDocs(doorsCol);
            const doorsList = doorsSnapshot.docs.map(doc => doc.data());

            console.log("---------------------------------------");
            console.log("------------Checking Doors-------------");
        
            var door = doorsList[0].front;
            console.log("Front Door:");
            console.log(door);
            this.setState({doorFrontState: door});
            if (door === false){
                this.setState({doorFrontIcon: IconDoorClosedA});
            }
            else{
                this.setState({doorFrontIcon: IconDoorOpenA});
            }

            door = doorsList[0].back;
            console.log("Back Door:");
            console.log(door);
            this.setState({doorBackState: door});
            if (door === false){
                this.setState({doorBackIcon: IconDoorClosedA});
            }
            else{
                this.setState({doorBackIcon: IconDoorOpenA});
            }

            door = doorsList[0].bathroom;
            console.log("Bathroom Door:");
            console.log(door);
            this.setState({doorBathroomState: door});
            if (door === false){
                this.setState({doorBathroomIcon: IconDoorClosedB});
            }
            else{
                this.setState({doorBathroomIcon: IconDoorOpenB});
            }

            door = doorsList[0].bedroom1;
            console.log("Bedroom1 Door:");
            console.log(door);
            this.setState({doorBedroom1State: door});
            if (door === false){
                this.setState({doorBedroom1Icon: IconDoorClosedC});
            }
            else{
                this.setState({doorBedroom1Icon: IconDoorOpenC});
            }

            door = doorsList[0].bedroom2;
            console.log("Bedroom2 Door:");
            console.log(door);
            this.setState({doorBedroom2State: door});
            if (door === false){
                this.setState({doorBedroom2Icon: IconDoorClosedB});
            }
            else{
                this.setState({doorBedroom2Icon: IconDoorOpenB});
            }
            console.log("---------------------------------------");
        }
        GetDoorsState();
        setInterval(GetDoorsState, 5000);

        const GetLightsState = async () => {
            const lightsCol = collection(db, 'lights');
            const lightsSnapshot = await getDocs(lightsCol);
            const lightsList = lightsSnapshot.docs.map(doc => doc.data());
        
            var light = lightsList[0].livingroom;
            console.log("Living Room Light:");
            console.log(light);
            this.setState({lightLivingRoomState: light});
            if (light === false){
                this.setState({lightLivingRoomIcon: IconLightOff});
            }
            else{
                this.setState({lightLivingRoomIcon: IconLightOn});
            }

            light = lightsList[0].kitchen;
            console.log("Kitchen Light:");
            console.log(light);
            this.setState({lightKitchenState: light});
            if (light === false){
                this.setState({lightKitchenIcon: IconLightOff});
            }
            else{
                this.setState({lightKitchenIcon: IconLightOn});
            }

            light = lightsList[0].bathroom;
            console.log("Bathroom Light:");
            console.log(light);
            this.setState({lightBathroomState: light});
            if (light === false){
                this.setState({lightBathroomIcon: IconLightOff});
            }
            else{
                this.setState({lightBathroomIcon: IconLightOn});
            }

            light = lightsList[0].bedroom1;
            console.log("Bedroom1 Light:");
            console.log(light);
            this.setState({lightBedroom1State: light});
            if (light === false){
                this.setState({lightBedroom1Icon: IconLightOff});
            }
            else{
                this.setState({lightBedroom1Icon: IconLightOn});
            }

            light = lightsList[0].bedroom2;
            console.log("Bedroom2 Light:");
            console.log(light);
            this.setState({lightBedroom2State: light});
            if (light === false){
                this.setState({lightBedroom2Icon: IconLightOff});
            }
            else{
                this.setState({lightBedroom2Icon: IconLightOn});
            }
        }
        GetLightsState();
    }

    //Listener depending of the option
    _clickEventListener(key) { 
        //Bathroom
        if (key == 1){
            if (this.state.lightBathroomState == true){
                this.setState({lightBathroomState: false});
                this.setState({lightBathroomIcon: IconLightOff});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bathroom: false
                });
            }
            else {
                this.setState({lightBathroomState: true});
                this.setState({lightBathroomIcon: IconLightOn});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bathroom: true
                });
            }
        }
        //Kitchen
        if (key == 2){
            if (this.state.lightKitchenState == true){
                this.setState({lightKitchenState: false});
                this.setState({lightKitchenIcon: IconLightOff});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    kitchen: false
                });
            }
            else {
                this.setState({lightKitchenState: true});
                this.setState({lightKitchenIcon: IconLightOn});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    kitchen: true
                });
            }
        }
        //Living Room
        if (key == 3){
            if (this.state.lightLivingRoomState == true){
                this.setState({lightLivingRoomState: false});
                this.setState({lightLivingRoomIcon: IconLightOff});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    livingroom: false
                });
            }
            else {
                this.setState({lightLivingRoomState: true});
                this.setState({lightLivingRoomIcon: IconLightOn});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    livingroom: true
                });
            }
        }
        //Bedroom 1
        if (key == 4){
            if (this.state.lightBedroom1State == true){
                this.setState({lightBedroom1State: false});
                this.setState({lightBedroom1Icon: IconLightOff});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bedroom1: false
                });
            }
            else {
                this.setState({lightBedroom1State: true});
                this.setState({lightBedroom1Icon: IconLightOn});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bedroom1: true
                });
            }
        }
        //Bedroom 2
        if (key == 5){
            if (this.state.lightBedroom2State == true){
                this.setState({lightBedroom2State: false});
                this.setState({lightBedroom2Icon: IconLightOff});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bedroom2: false
                });
            }
            else {
                this.setState({lightBedroom2State: true});
                this.setState({lightBedroom2Icon: IconLightOn});
                const light = doc(db, 'lights', '94gg9LNp9y863H69aFho');
                updateDoc(light, {
                    bedroom2: true
                });
            }
        }
    }

    render() {
        return (
            <ImageBackground    style = {styles.signalsScreenBackground} 
                                source = {BackgroundHouse}   
                                resizeMode = "contain"
                                >
                <TouchableOpacity   onPress={() => this._clickEventListener(1)} >
                    <Image  style = {styles.bathroomButton} 
                            source = {this.state.lightBathroomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(2)} >
                    <Image  style = {styles.kitchenButton} 
                            source = {this.state.lightKitchenIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(3)} >
                    <Image  style = {styles.livingRoomButton} 
                            source = {this.state.lightLivingRoomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(4)} >
                    <Image  style = {styles.bedroom1Button} 
                            source = {this.state.lightBedroom1Icon}/>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this._clickEventListener(5)} >
                    <Image  style = {styles.bedroom2Button} 
                            source = {this.state.lightBedroom2Icon}/>
                </TouchableOpacity>    
                <Image  style = {styles.bathroomDoor} 
                        source = {this.state.doorBathroomIcon}/> 
                <Image  style = {styles.bedroom1Door} 
                        source = {this.state.doorBedroom1Icon}/>     
                <Image  style = {styles.bedroom2Door} 
                        source = {this.state.doorBedroom2Icon}/>     
                <Image  style = {styles.frontDoor} 
                        source = {this.state.doorFrontIcon}/>       
                <Image  style = {styles.backDoor} 
                        source = {this.state.doorBackIcon}/>  
            </ImageBackground>
        );
    }
}