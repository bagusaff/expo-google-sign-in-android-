import React, {useState,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import {SocialIcon} from 'react-native-elements'
import * as GoogleSignIn from 'expo-google-sign-in';
import {CLIENT_ID} from '@env'
export default function LoginScreen() {    
  const [user , setUser] = useState(null)

  useEffect(()=>{
   initAsync(); 
  },[])

  initAsync = async() => {
    await GoogleSignIn.initAsync({
      clientId: CLIENT_ID,
    })    
  }

  _syncUserWithStateAsync = async()=>{
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser(user);
  }

  signOutAsync = async()=>{
    await GoogleSignIn.signOutAsync();
    setUser(null);
  }

  signInAsync = async()=>{
      try{
      await GoogleSignIn.askForPlayServicesAsync();
      const {type,user} = await GoogleSignIn.signInAsync();
      if(type==='success'){
        _syncUserWithStateAsync();
      }
    } catch ({message}){
      alert('login:Error'+message);
    }
  }

  btnLoginOnPress= () =>{
    if(user){
      signOutAsync();
    } else {
      signInAsync();
    }
  }
    return (
        <View style={styles.container}>
          <SocialIcon 
          title='Sign in with google'
          button={true}
          type='google'
          onPress={()=>btnLoginOnPress()}
          />
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