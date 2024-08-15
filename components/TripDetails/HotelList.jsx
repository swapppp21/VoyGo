import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import HotelCard from './HotelCard'


export default function HotelList({hotelList}) {

  
  

  return (
    <View style={{
        marginTop:20,
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        marginLeft:10
      }}>🏯 Hotel Recommendation</Text>
     
      <FlatList
    
      data={hotelList}
      style={{
        marginTop:10,
       
        
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item,index})=>(
        <HotelCard  item={item}/>
      )}
      
      />


    </View>
  )
}