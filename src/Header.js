import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import styles from './styles'
import logo from './images/joquempow.png'


class Header extends Component {
    render() {
        return (
            <View style={styles.header} >
                <Image source={logo} />
            </View>
        );
    }
}

export default Header;