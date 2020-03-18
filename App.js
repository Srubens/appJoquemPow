import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import styles from './src/styles'
import logo from './src/images/joquempow.png'

class Header extends Component{
    render(){
        return(
            <View style={styles.header} >
                <Image source={logo} />
            </View>
        );
    }
}

class App extends Component{

    constructor(props){

        super(props)

        this.state = { userChoice: '', userComputer: '', resultado:'' }

    }

    theChoice(userChoice){
        
        //GERA O NUMERO ALEATORIO ENTRE 0 E 2 
        let randomNumber = Math.floor( Math.random() * 3 )
        let choiceComputer = '';

        switch (randomNumber){
            case 0: choiceComputer = 'Pedra';
            break;
            case 1: choiceComputer = 'Papel';
            break;
            case 2: choiceComputer = 'Tesoura';
            break;
        }

        let resultado = '';

        if (choiceComputer == 'Pedra' ){
            if( userChoice == 'Pedra' ){
                resultado = 'Empate!';
            }

            if( userChoice == 'Papel' ){
                resultado = 'Você Ganhou :D !';
            }

            if( userChoice == 'Tesoura' ){
                resultado = "Você Perdeu :( !"
            }
        }

        if (choiceComputer == 'Papel' ){
            if (userChoice == 'Papel' ){
                resultado = 'Empate!';
            }

            if( userChoice == 'Tesoura' ){
                resultado = 'Você Ganhou :D !';
            }

            if( userChoice == 'Pedra' ){
                resultado = "Você Perdeu :( !"
            }
        }

        if (choiceComputer == 'Tesoura' ){
            if( userChoice == 'Tesoura' ){
                resultado = 'Empate!';
            }

            if( userChoice == 'Pedra' ){
                resultado = 'Você Ganhou :D !';
            }

            if( userChoice == 'Papel' ){
                resultado = "Você Perdeu :( !"
            }
        }

        this.setState({ 
            userChoice: userChoice,
            userComputer: choiceComputer,
            resultado: resultado
        })
    }

    render(){
        return(
            <>
                <Header />
                <View style={styles.content} >
                    <View style={styles.boxText} >
                        <Text>Escolha do Usuário: {this.state.userChoice} </Text>
                        <Text>Escolha do Computador: {this.state.userComputer} </Text>
                        <Text>Resultado: {this.state.resultado} </Text>
                    </View>
                    <View style={styles.boxBtn} >
                        <Button title="Pedra" onPress={() => { this.theChoice('Pedra') } } />
                        <Button title="Papel" onPress={() => { this.theChoice('Papel') } }  />
                        <Button title="Tesoura" onPress={() => { this.theChoice('Tesoura') } } />
                    </View>
                </View>
            </>
        );
    }

}


export default App;