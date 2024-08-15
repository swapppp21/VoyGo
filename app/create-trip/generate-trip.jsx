import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { useEffect,useContext } from 'react'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AiModal'
import { useRouter } from 'expo-router'
import {auth,db} from './../../configs/FireBaseConfig'
import { doc, setDoc } from "firebase/firestore"; 


export default function GenerateTrip() {

    const[loading,setLoading]=useState(false)
    const {tripData,setTripData}= useContext(CreateTripContext)
    const router=useRouter()
    const user=auth.currentUser;
    useEffect(()=>{
        tripData && GenerateAiTrip()
    },[])
    const GenerateAiTrip=async()=>{
        setLoading(true);
        const FINAL_PROMT=AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.name)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNights}',tripData.totalNoOfDays-1)
        .replace('{traveler}',tripData.traveler?.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNights}',tripData.totalNoOfDays-1)
        console.log(FINAL_PROMT)


      const result = await chatSession.sendMessage(FINAL_PROMT);
      console.log(result.response.text());
   const tripResp= JSON.parse(result.response.text())
    setLoading(false);
    const docId=(Date.now()).toString();
   const result_ = await setDoc(doc(db,"UserTrips", docId),{
        userEmail:user.email,
        tripPlan: tripResp, //AI Result
        tripData:JSON.stringify(tripData) ,  //User Selection Data
        docId:docId
    })
 
        router.push('(tabs)/mytrip')
  
    }


  return (
    <View style={{
        padding:25,
        paddingTop:60,
        backgroundColor: Colors.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:50,
        textAlign:'center'
      }}>Please wait....</Text>
      <Text style={{
        fontFamily:'outfit-med',
        fontSize:25,
        textAlign:'center',
        marginTop:20
      }}>Hold on while we generate your awesome trip </Text>
      <Image source={require('./../../assets/images/mode.gif')}
      style={{
        width: '100%',
        height:500,
        marginTop:50,
        objectFit:'contain'
        
        
      }}
      />
      <Text style={{
        fontFamily:'outfit-med',
        fontSize:20,
        textAlign:'center',
        marginTop:20
      }}>Don't you dare going back😡 </Text>
    </View>
  )
}