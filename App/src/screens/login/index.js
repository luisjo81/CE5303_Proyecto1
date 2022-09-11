import React, { Component } from 'react';
import { auth, sign } from '../../firebase-config'; 

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

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundLogin from '../../assets/backgrounds/bg1.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    _handleSignIn(){
        sign(auth, this.state.email, this.state.password)
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