import React, {useEffect} from 'react'
import { View,Text,Button, StyleSheet, ActivityIndicator } from 'react-native'
// import * as firebase from 'firebase'

export default function LoadingScreen({navigation}) {
    // useEffect(()=>{
    //     checkIfLoggedIn();
    // },[])

    // checkIfLoggedIn=()=>{
    //     firebase.auth().onAuthStateChanged(user=>
    //     {
    //         if(user){
    //             navigation.navigate('DashboardScreen')
    //         } else {
    //             navigation.navigate('LoginScreen')
    //         }
    //     })
    // }
    changePage=()=>{
        navigation.navigate('LoginScreen')
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color="#0000ff"/>
            <Text>Loading</Text>
            <Button title='press me' onPress={()=>changePage()}> test </Button>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})