import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useEffect,useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext'
import moment from 'moment'


export default function ReviewTrip() {
    

    const router=useRouter()
    const {tripData,setTripData}= useContext(CreateTripContext)
    const navigation= useNavigation()
    useEffect(()=>{
        navigation.setOptions({
          headerShown:true,
          headerTransparent: true,
          headerTitle:''
        })
      },[])

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
      }}>Review your Trip</Text>
  
       <View style={{
        marginTop:30
       }}>
          <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            
          }}>
              Before Generating your iternary, please review Trip
          </Text>
          {/* Destination Info */}
          <View  style={{
            marginTop:30,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
          <Ionicons name="location-sharp" size={54} color="black" />    
          <View>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,

          }}> Destination</Text>
          <Text style={{
            fontFamily:'outfit-med',
            fontSize:20,
            color:Colors.GRAY
          }}> {tripData?.locationInfo?.name}</Text>
          </View>

          </View>
          <View  style={{
            marginTop:30,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
          <Ionicons name="calendar-number-outline" size={54} color="black" />   
          <View>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,

          }}> Travel Date </Text>
          <Text style={{
            fontFamily:'outfit-med',
            fontSize:20,
            color:Colors.GRAY
          }}>{moment(tripData?.startDate).format('DD-MM')}  To  {moment(tripData?.endDate).format('DD-MM')}  ({tripData?.totalNoOfDays}days )
           </Text>
          
          </View>
          </View>
          <View  style={{
            marginTop:30,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
          <Ionicons name="car-outline" size={54} color="black" />    
          <View>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,

          }}>Who's travelling</Text>
          <Text style={{
            fontFamily:'outfit-med',
            fontSize:20,
            color:Colors.GRAY
          }}> {tripData?.traveler?.title}</Text>
          </View>

          </View>
          <View  style={{
            marginTop:30,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
          <Ionicons name="cash-outline" size={54} color="black" />    
          <View>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,

          }}> Budget Info</Text>
          <Text style={{
            fontFamily:'outfit-med',
            fontSize:20,
            color:Colors.GRAY
          }}> {tripData?.budget}</Text>
          </View>

          </View>
       </View>
       <TouchableOpacity 
      onPress={()=>router.replace('/create-trip/generate-trip')}
      style={{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        marginTop:50,
        borderRadius:20
      }}>
      
          <Text style={{
            fontFamily: 'outfit-med',
            color: Colors.WHITE,
            fontSize:25,
            textAlign:'center'
          }}>Build My Trip</Text>
      </TouchableOpacity>
      </View>
    ) 
}