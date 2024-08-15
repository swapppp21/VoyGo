import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import {db,auth} from './../../configs/FireBaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from '../../components/MyTrips/UserTripList';


export default function MyTrip() {
  const[userTrips, setUserTrips]= useState([])
  const user=auth.currentUser
  const[loading,setLoading] = useState(false)
  useEffect(()=>{
    user && GetMyTrips();
  },[user])

  const GetMyTrips=async()=>{
    setLoading(true);
    setUserTrips([])
    const q=query(collection(db,'UserTrips'), where('userEmail','==',user?.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev,doc.data()])
    });
    setLoading(false);
  }


  return (
    <ScrollView style={{
      padding: 25,
      paddingTop:55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
    
      <View
        style={{
          display:'flex',
          flexDirection:'row',
          alignContent:'center',
          justifyContent:'space-between'
        }}
      >
       <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 40
       }}>MyTrips</Text>
       
       <Ionicons name="add-circle" size={45} color="black" />
      </View>
      {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
      {userTrips?.length==0?
        <StartNewTripCard/>
        :
        <UserTripList userTrips={userTrips} />
      }
    </ScrollView>
  )
}