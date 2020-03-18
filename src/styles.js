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
        marginLeft: 10
    },
    boxBtn:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin:60
    }
})

export default styles;