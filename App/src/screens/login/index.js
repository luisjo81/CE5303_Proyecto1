import React, { Component } from 'react';

//React Native Components
import {
    ImageBackground,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundLogin from '../../assets/backgrounds/bg1.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
            dataSource: ''
        };
    }

    //Listener depending of the option
    _clickEventListener() {
        this._getData();
    }

    _onPasswordTextChanged = event => {
        this.setState({
            password: event.nativeEvent.text,
        });
    };

    _onUserNameTextChanged = event => {
        this.setState({
            userName: event.nativeEvent.text,
        });
    };

    //Get info from the server when user is login
    _getData() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ImageBackground style={styles.loginScreenBackground} source={BackgroundLogin}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.loginScreenMainContainer}>
                    <Text style={styles.loginScreenTitleText}>SmartHome</Text>
                    <View style={styles.loginScreenFormContainer}>
                        <View style={styles.loginScreenBackContainer}>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor={colors.transparentWhite}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.userName}
                                onChange={this._onUserNameTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor={colors.transparentWhite}
                                secureTextEntry
                                value={this.state.password}
                                onChange={this._onPasswordTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TouchableOpacity style={styles.loginScreenButtonContainer} onPress={() => { this._clickEventListener() }}>
                                <Text style={styles.loginScreenButtonText}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}