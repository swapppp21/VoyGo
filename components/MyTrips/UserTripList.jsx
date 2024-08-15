import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import UserTripCard from './UserTripCard'
import {useRouter} from 'expo-router'

export default function UserTripList({userTrips}) {


   const router=useRouter()
    const LatestTrip=JSON.parse(userTrips[0].tripData)
  return userTrips &&(
    <View>
      <View style={{
        marginTop:20
      }}>
        {LatestTrip?.locationInfo?.photoRef?
            <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                +LatestTrip.locationInfo?.photoRef
                +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius:15,
                    
                   }}
                />
         :
         <Image source={require('./../../assets/images/Home.jpeg')}
         style={{
            width: '100%',
            height: 200,
            borderRadius:15,
            
           }}
         />}

      </View>
      <View style={{
        marginTop:10,
        marginLeft:5
      }}>
          <Text style={{
            fontFamily:'outfit-med',
            fontSize:35
          }}>{userTrips[0]?.tripPlan?.tripPlan?.location}</Text>
           <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            color: Colors.GRAY
          }}>{moment(LatestTrip.startDate).format('DD MMM YYYY')}</Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            color: Colors.GRAY
          }}>Who's travelling:  {LatestTrip.traveler.title}</Text>
      </View>
      <View>
         <TouchableOpacity 
         onPress={()=>router.push({pathname:'/trip-details',params:{
         trip:JSON.stringify(userTrips[0])
         }})}
         style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            marginTop: 20,
            borderRadius:20
         }}>
                 <Text style={{
                    color: Colors.WHITE,
                    fontFamily: 'outfit-bold',
                    fontSize:20,
                    textAlign:'center'
                 }}> Ta-da! Reveal Your Plan!</Text>
         </TouchableOpacity>
      </View>
      {userTrips.map((trip,index)=>(
        <UserTripCard trip={trip} key={index}/>
      ))}
    </View>
  )
}