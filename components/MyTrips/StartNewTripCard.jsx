import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';
import {useRouter} from 'expo-router'

export default function StartNewTripCard() {
    const router=useRouter()
  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:20
    }}>
    <Ionicons name="location-sharp" size={40} color="black" />
    <Text style={{
        fontSize:25,
        fontFamily:'outfit-med',
    }}>
       No trips planned yet :(
    </Text>
    <Text style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        color: Colors.GRAY
    }}>
    The world is waiting—plan your next journey now!
    </Text>
    <TouchableOpacity 
      onPress={()=>router.push('/create-trip/search-place')}
    style={{
        padding:20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
    }}>
       <Text style={{
        color:Colors.WHITE,
        fontFamily: 'outfit',
        fontSize: 20
       }}>Start a new trip</Text>
    </TouchableOpacity>
    </View>
  )
}