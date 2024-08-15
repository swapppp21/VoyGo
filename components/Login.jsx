import { View,StyleSheet,  Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


export default function Login() {
  const router=useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/Login2.jpg')}
      style={{
        width:'100%',
        height: 600

        }}
      />
      <View style={styles.container}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:28,
          textAlign:'center' 
        }}>VoyGo</Text>
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit',
          fontSize:20
        }}>Discover new destinations effortlessly.
        Plan your perfect trip with AI guidance.
        VoyGo: Your smart travel companion.</Text>


        <TouchableOpacity style={styles.button}
           onPress={()=>router.push('auth/sign-in')}
        >
          <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit',
            textAlign:'center',
            fontSize: 17,
          }}>Get Started</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    height:'100%',
    padding:15,

  },
  button:{
    padding:15,
    backgroundColor: Colors.PRIMARY,
    borderRadius:99,
    marginTop:15



  }

})
