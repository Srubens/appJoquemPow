import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import styles from './styles'
import Pedra from './images/pedra.png'
import Papel from './images/papel.png'
import Tesoura from './images/tesoura.png'

class Icone extends Component {

    render() {

        if (this.props.choice == 'Pedra') {
            return (
                <View>
                    <Text style={styles.textChoice} >{this.props.player}</Text>
                    <Image style={styles.Images} source={Pedra} />
                </View>
            );
        } else if (this.props.choice == 'Papel') {
            return (
                <View>
                    <Text style={styles.textChoice} >{this.props.player}</Text>
                    <Image style={styles.Images} source={Papel} />
                </View>
            );
        } else if (this.props.choice == 'Tesoura') {
            return (
                <View>
                    <Text style={styles.textChoice} >{this.props.player}</Text>
                    <Image style={styles.Images} source={Tesoura} />
                </View>
            );
        } 
        
        return false

    }
    
}

export default Icone;