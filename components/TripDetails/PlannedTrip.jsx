import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
export default function PlannedTrip({details}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:40
      }}>PlannedTrip 🏕️ </Text>
      
        {details?.map((item, index, array) => (
            <View 
              
            
            
            key={index}>
                {/* Display the day only if it's the first occurrence in the array */}
                {index === 0 || item.day !== array[index - 1].day ? (
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:25
                    }}>Day {item?.day}</Text>
                    
                ) : null}
                <View style={{
                  
                   marginTop:10,
                   borderRadius:20,
                   padding:10,
                      backgroundColor:Colors.BLUE,
                  
                }}>
                    <Text style={{
                      fontFamily:'outfit-med',
                        fontSize:20
                    }}>{item?.time}</Text>
                    <Text style={{
                        fontFamily:'outfit',
                        fontSize:15
                    }}><Text style={{
                        fontFamily:'outfit-bold' ,
                        fontSize:16 
                     }}>{item?.location}:  </Text>
                     {item?.details}</Text>
                     <Text style={{
                        fontFamily:'outfit',
                        fontSize:15
                    }}>⏱️Time to spend: {item?.time_to_spend}</Text>
                    {/* Add other fields as necessary */}
                    
                </View>
               
            </View>
      ))}


    </View>
  )
}
  