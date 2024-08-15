import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useRouter, useNavigation } from 'expo-router'
import { useEffect, useContext } from 'react'
import { Colors } from '../../constants/Colors'
import { SelectBudgetOptions } from '../../constants/Options'
import OptionCard from './../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectBudget() {

    const navigation= useNavigation()
    const router=useRouter()
    const {tripData,setTripData}= useContext(CreateTripContext)
    const[selectedOption,setSelectedOption]= useState()
    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent: true,
        headerTitle:''
      })
    },[])
    useEffect(()=>{
        selectedOption && setTripData({
            ...tripData,
            budget:selectedOption?.title
        })

    },[selectedOption])

    const onClickContinue=()=>{
        if(!selectedOption){
            ToastAndroid.show('Please select budget',ToastAndroid.LONG)
            return;
        }
        router.push('/create-trip/review-trip')
    }
  return (
    <View style={{
        padding:25,
        paddingTop:10,
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:50,
        marginTop:70,
        textAlign:'center'

      }}>Budget</Text>
      <View>
      <Text style={{
        fontFamily:'outfit-med',
        fontSize:25,
        marginTop:20
      }}>Choose spending habits for your trip</Text>
      <FlatList
        data={SelectBudgetOptions}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
                marginTop:10
            }}
            onPress={()=>setSelectedOption(item)}
            >
                 <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
        )}
      />
      </View>
      
      <TouchableOpacity 
      onPress={()=>onClickContinue()}
      style={{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        marginTop:30,
        borderRadius:150
      }}>
      
          <Text style={{
            fontFamily: 'outfit-med',
            color: Colors.WHITE,
            fontSize:25,
            textAlign:'center'
          }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}