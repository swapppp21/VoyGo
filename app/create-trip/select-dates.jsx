import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { useRouter, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment'
import { CreateTripContext } from '../../context/CreateTripContext'



export default function SelectDates() {
    const[startDate,setStartDate]=useState()
    const[endDate,setEndDate]=useState()
    const {tripData,setTripData}= useContext(CreateTripContext)
    const router= useRouter()
    const navigation= useNavigation()
    useEffect(()=>{
        navigation.setOptions({
          headerShown:true,
          headerTransparent: true,
          headerTitle:''
        })
      },[])

    const onDateChange=(date,type)=>{
         console.log(date,type)
         if(type=='START_DATE'){
            setStartDate(moment(date))
         }
         else{
            setEndDate(moment(date))
         }
    }  
    const OndateSelectionContinue=()=>{
        if(!startDate && !endDate){
            ToastAndroid.show('Please select Start and End date',ToastAndroid.LONG)
            return;
        }
        const totalNoOfDays=endDate.diff(startDate,'days')
        console.log(totalNoOfDays+1)
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        })
        router.push('/create-trip/select-budget')
    }  
  return (
    <View style={{
        padding:25,
        paddingTop:80,
        backgroundColor: Colors.WHITE,
        height:'100%',
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:45
      }}>Travel Dates</Text>
      <View style={{
        marginTop: 30,
        
      }}>
      <CalendarPicker onDateChange={onDateChange}
      allowRangeSelection={true}
      minDate={new Date()}
      maxRangeDuration={5}
      selectedRangeStyle={{
        backgroundColor:Colors.PRIMARY
      }}
      selectedDayTextStyle={{
        color:Colors.WHITE
      }}
      />
      <TouchableOpacity 
      onPress={OndateSelectionContinue}
      style={{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        marginTop:200,
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
    </View>
  )
}