import { View, Text, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
export default function FlightInfo({flightData}) {

  const handlePress = () => {
    const url = 'https://www.google.com/travel/flights';
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };
  return (
    <View style={{
        marginTop:20,
        
        borderColor:Colors.PRIMARY,
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius:20,
        padding:10

    }}>

      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
      }}>🛫 Flights</Text>
      <TouchableOpacity 
      
      onPress={handlePress}
      style={{
        backgroundColor:Colors.PRIMARY,
        padding:5,
        width: 80,
        borderRadius:10,

      }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            color: Colors.WHITE
          }}> Book Here </Text>
      </TouchableOpacity>
      </View>
    
      <Text style={{
        fontFamily:'outfit',
        fontSize:18,
        color:Colors.GRAY,
        marginTop:10
      }}>Price: {flightData?.price || "N/A"}</Text>

      
    </View>
  )
}