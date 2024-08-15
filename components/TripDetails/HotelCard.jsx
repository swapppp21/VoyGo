import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi'





export default function HotelCard({item}) {

    const[photoRef, setPhotoRef]= useState(null)
    useEffect(()=>{
        GetGooglePhotosRef()

    },[])
    const GetGooglePhotosRef=async()=>{
        const result= await GetPhotoRef(item.name)
        setPhotoRef(result);
      }
  return (
    <View style={{
        marginRight:40,
        width:180,
       
    }}>
        <Image 
        source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
            +photoRef
            +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
        style={{
            width:200,
            height:140,
            borderRadius:15,
        }}
        
        />
        <View >
           <Text style={{
            fontFamily:'outfit-med',
            textAlign:'center',
            fontSize:18,
           }}>{item.name}</Text>
        </View>
        <View style={{
        }}>
        <Text style={{
            fontFamily:'outfit',
            textAlign:'center',
            marginTop:3
           }}>💰{item.price}</Text>

           <Text style={{
            fontFamily:'outfit',
            textAlign:'center',
            marginTop:3
           }}>⭐{item.rating}</Text>
           
        </View>
    </View>
  )
}