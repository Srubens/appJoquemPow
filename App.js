import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import styles from './src/styles'
import Header from './src/Header'
import Icone from './src/Icone'

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
                    <View style={styles.boxBtn} >
                        <Button title="Pedra" onPress={() => { this.theChoice('Pedra') }} />
                        <Button title="Papel" onPress={() => { this.theChoice('Papel') }} />
                        <Button title="Tesoura" onPress={() => { this.theChoice('Tesoura') }} />
                    </View>
                    <View style={styles.boxText} >
                        <Icone choice={this.state.userChoice}  player="Você" ></Icone>
                        <Icone choice={this.state.userComputer}  player="computer" ></Icone>
                        <Text style={styles.textResultado} >{this.state.resultado} </Text>
                    </View>
                </View>
            </>
        );
    }

}

export default App;