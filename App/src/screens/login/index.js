import React, { Component } from 'react';

//React Native Components
import {
    ImageBackground,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";

import { 
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';

//import { firebaseConfig } from '../../../firebase-config';
const firebaseConfig = {
    apiKey: "AIzaSyDr87yBag222YnfFlST_eTrlpiI9Gxb5Js",
    authDomain: "embebidos-18ed2.firebaseapp.com",
    projectId: "embebidos-18ed2",
    storageBucket: "embebidos-18ed2.appspot.com",
    messagingSenderId: "411355731261",
    appId: "1:411355731261:web:e3ec7f785fd484a6e52154"
}

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundLogin from '../../assets/backgrounds/bg1.jpg';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    _handleSignIn(){
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
            console.log('Signed in!')
            const user = userCredential.user;
            console.log(user)
            this.props.navigation.navigate('Home');
        })
        .catch(error => {
            console.log(error)
            Alert.alert("Credenciales incorrectos");
        })
    }

    _onEmailTextChanged = event => {
        this.setState({
            email: event.nativeEvent.text,
        });
    };

    _onPasswordTextChanged = event => {
        this.setState({
            password: event.nativeEvent.text,
        });
    };
    
    render() {
        return (
            <ImageBackground    style={styles.loginScreenBackground} 
                                source={BackgroundLogin}>
                <KeyboardAvoidingView   behavior={'padding'}
                                        style={styles.loginScreenMainContainer}>
                    <Text style={styles.loginScreenTitleText}>SmartHome</Text>
                    <View style={styles.loginScreenFormContainer}>
                        <View style={styles.loginScreenBackContainer}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={colors.black}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChange={this._onEmailTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor={colors.black}
                                secureTextEntry
                                onChange={this._onPasswordTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TouchableOpacity   style={styles.loginScreenButtonContainer} 
                                                onPress={() => {this._handleSignIn()}}>
                                <Text style={styles.loginScreenButtonText}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}