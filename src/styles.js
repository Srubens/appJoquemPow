import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        flex:2,
        textAlign:'center',
        flexDirection:'column'
    },
    boxText:{
        justifyContent:'center',
        flexDirection: 'column',
        marginLeft: 10,
        alignItems: 'center'
    },
    textChoice:{
        marginBottom:10,
        fontSize: 20,
    },
    boxBtn:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin:30,
    },
    textResultado:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    Images:{
        marginBottom: 20
    }
})

export default styles;