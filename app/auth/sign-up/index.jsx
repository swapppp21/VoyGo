import { View, StyleSheet, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import {Colors} from './../../../constants/Colors'
import { useRouter } from 'expo-router'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../configs/FireBaseConfig'

export default function SignIn() {
  const router= useRouter()
  const[email,setEmail]= useState();
  const[password,setPassword]= useState();
  const[fullName,setfullName]= useState();

  const OnCreateAccount=()=>{
    if(!email && !password && !fullName){
      ToastAndroid.show('Yo!!!! please enter all details',ToastAndroid.BOTTOM)
      return;

    }


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });
  }
  return (
    <View style={{
      padding:20,
      paddingTop:80,
      backgroundColor: Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Create New Account </Text>

       {/*Username */}
       <View style={{
        marginTop:50
      }}>
        <TextInput
        style={styles.input} 
        onChangeText={(value)=>setfullName(value)}
        placeholder='Enter Fullname'
        />
      </View>
      {/*Email */}
      <View style={{
        marginTop:30
      }}>
        <TextInput
        style={styles.input} 
        onChangeText={(value)=>setEmail(value)}
        placeholder='Enter your email'
        />
      </View>
      {/*Password */}
      <View style={{
        marginTop:30
      }}>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        onChangeText={(value)=>setPassword(value)}
        placeholder='Enter Password'
        />
      </View>
      {/* Button */}
      <TouchableOpacity
       onPress={OnCreateAccount}
      style={{
        padding:20,
        backgroundColor: Colors.PRIMARY,
        borderRadius:15,
        marginTop: 40
      }}>
        <Text style={{
          color:Colors.WHITE,
          fontFamily:'outfit',
          fontSize: 20,
          textAlign: 'center'
        }}>Create Account</Text>
      </TouchableOpacity>
      {/* Create Account Button */}
      <TouchableOpacity
          onPress={()=>router.replace('auth/sign-in')}
      style={{
        padding:18,
        backgroundColor: Colors.WHITE,
        borderRadius:15,
        marginTop: 30,
        borderWidth:3
      }}>
        <Text style={{
          color:Colors.PRIMARY,
          fontFamily:'outfit',
          fontSize: 20,
          textAlign: 'center'
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.GRAY,
    fontFamily:'outfit',
    borderWidth:4,
    fontSize:20

  }
})