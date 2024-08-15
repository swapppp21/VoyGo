import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.PRIMARY}}>
       <Tabs.Screen name='mytrip'
       options={{
        tabBarLabel:'My Trip',
        tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color="black" />}} />
       <Tabs.Screen name='discover'
       options={{
        tabBarLabel:'Discover',
        tabBarIcon:({color})=><Entypo name="globe" size={24} color="black" />}} />
       <Tabs.Screen name='profile'
       options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color})=><Ionicons name="people-circle-outline" size={24} color="black" />}} />
    </Tabs>
  )
}