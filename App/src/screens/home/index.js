import React, { Component } from 'react';

import { 
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Icons
import IconRoom from '../../assets/icons/room.png';
import IconCamera from '../../assets/icons/camera.png';
import IconGear from '../../assets/icons/gear.png';
import IconLogout from '../../assets/icons/logout.png';

export default class Home extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: colors.black
          },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
        }
    };

    constructor(props) {
      super(props);
      this.state = {
        data: [
            {
                key: 1, 
                title: "Monitoreo", 
                color: colors.blue1, 
                description: "Monitorea los sensores de la casa en tiempo real",  
                image: IconRoom
            },
            {
                key: 2, 
                title: "Cámara", 
                color: colors.blue1, 
                description: "Toma una fotografía con la cámara para observar una habitación", 
                image: IconCamera
            },
            {
                key: 3, 
                title: "Ajustes", 
                color: colors.blue1, 
                description: "Cambia configuraciones dentro de la aplicación", 
                image: IconGear
            },
            {
                key: 4, 
                title: "Cerrar Sesión",  
                color: colors.blue1, 
                description: "Vuelve a la pantalla de Inicio de Sesión",  
                image: IconLogout
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        if(key === 1){
          this.props.navigation.navigate('Signals');
        }
        if(key === 2){
          this.props.navigation.navigate('Camera');
        }
        if(key === 3){
            alert('Temp');
        }
        if(key === 4){
          this.props.navigation.navigate('Login');
        }
    }
  
    render() {
      return (
        <View style = {styles.homeScreenMainContainer}>
          <FlatList style = {styles.homeScreenList}
            contentContainerStyle = {styles.homeScreenListContainer}
            data = {this.state.data}
            horizontal = {false}
            numColumns = {2}
            keyExtractor = {(item) => {
              return item.key;
            }}
            renderItem = {({item}) => {
              return (
                <TouchableOpacity style={[styles.homeScreenCard, {backgroundColor:item.color}]} 
                                  onPress={() => {this._clickEventListener(item.key)}}>
                  <View style = {styles.homeScreenCardHeader}>
                    <Text style = {styles.homeScreenListTitleText}>{item.title}</Text>
                  </View>
                  <Image  style = {styles.homeScreenCardImage} 
                          source = {item.image}/>
                  <View style = {styles.homeScreenCardFooter}>
                    <Text style = {styles.homeScreenListInfoText}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}/>
        </View>
      );
    }
}