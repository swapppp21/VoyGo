import { View, Text, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/FlightInfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrip from '../../components/TripDetails/PlannedTrip'
export default function TripDetails() {


    const navigation = useNavigation()
    const { trip } = useLocalSearchParams()
    const [tripDetails, setTripDetails] = useState([])

    const formatData = (data) => {
        try {
            return JSON.parse(data)
        } catch (error) {
            console.error("Error parsing trip data:", error);
            return {}; // Set an empty object as default if parsing fails
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
        try {
            setTripDetails(formatData(trip)) // Use get('trip') to access the value for key 'trip' from useLocalSearchParams
        } catch (error) {
            console.error("Error setting trip details:", error);
        }

    }, [])


    return tripDetails && (
        <ScrollView>
            <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                + formatData(tripDetails?.tripData).locationInfo?.photoRef
                + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                style={{
                    width: '100%',
                    height: 280,
                }}
            />
            <View style={{
                padding: 10,
                backgroundColor: Colors.WHITE,
                height: '100%',
                marginTop: -20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 30,
                    textAlign: 'center'
                }}>{tripDetails?.tripPlan?.tripPlan?.location}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',

                }}>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 18,
                        color: Colors.GRAY
                    }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MMM YYYY')} </Text>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 18,
                        color: Colors.GRAY
                    }}>- {moment(formatData(tripDetails.tripData).endDate).format('DD MMM YYYY')}</Text>
                </View>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.GRAY
                }}>Who's travelling : {formatData(tripDetails.tripData)?.traveler?.title}</Text>

                <FlightInfo flightData={tripDetails?.tripPlan?.tripPlan?.flight}/>
           
                <HotelList hotelList={tripDetails?.tripPlan?.tripPlan?.hotel}/>
           
                <PlannedTrip  details={tripDetails?.tripPlan?.tripPlan?.itinerary}/>

            </View>
           
         
            


        </ScrollView>
    )
}