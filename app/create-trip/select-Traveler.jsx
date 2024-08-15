import { View, Text, FlatList, TouchableOpacity, Touchable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectTravelerList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'


export default function SelectTraveler() {

  const[selectedTraveler, setelectedTravelers]= useState()
  const {tripData,setTripData}= useContext(CreateTripContext)
  const navigation= useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent: true,
      headerTitle:''
    })
  },[])
   useEffect(()=>{
    setTripData({...tripData,
    traveler: selectedTraveler})

   },[selectedTraveler])


   useEffect(()=>{
    console.log(tripData)
   },[tripData])


  return (
    <View style={{
      padding: 25,
      paddingTop:90,
      backgroundColor: Colors.WHITE,
      height:'100%'


    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:40,
        
      }}>Who's travelling?</Text>
      
      <View style={{
        marginTop:18,
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:25
        }}>Choose your travelers</Text>
        <FlatList data={SelectTravelerList}
          renderItem={({item,index})=>(
            <TouchableOpacity
            onPress={()=>setelectedTravelers(item)}>
               <OptionCard option={item} selectedOption={selectedTraveler}/>
            </TouchableOpacity>

          )}
        />
        
      </View>
     
      <TouchableOpacity 
      style={{
        padding:20,
        backgroundColor: Colors.PRIMARY,
        borderRadius:20,
        marginTop:50

      }}>
      <Link style={{
        width:'100%',
        textAlign:'center'
      }} href={'/create-trip/select-dates'}>
        <Text style={{
          fontFamily: 'outfit-med',
          color: Colors.WHITE,
          fontSize: 20,
         
        }}>
             Continue
        </Text>
        </Link>
      </TouchableOpacity>
   
    </View>
  )
}