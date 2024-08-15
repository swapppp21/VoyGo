import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
export default function UserTripCard({trip}) {

    const formatData=(data)=>{
         return JSON.parse(data)
    }
  return (
    <View style={{
        marginTop: 20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
    }}>
    <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
      +formatData(trip.tripData).locationInfo?.photoRef
      +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
      style={{
          width: 100,
          height: 100,
          borderRadius:15,
          
         }}
      />
        <View style={{
            marginLeft:10
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20
            }}>{trip.tripPlan?.tripPlan?.location}</Text>

            <Text style={{
              fontFamily:'outfit',
              fontSize:18,
              color: Colors.GRAY
            }}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>

             <Text style={{
                fontFamily:'outfit',
                fontSize:18,
                color:Colors.GRAY
             }}>Who's travelling : {formatData(trip.tripData).traveler.title}</Text>
        </View>
    </View>
  )
}