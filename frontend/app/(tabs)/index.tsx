import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const [allergies, setAllergies] = useState([]);
  
  if (allergies.length === 0) {
    return(
      <View style={[{ flex: 1 },{ justifyContent: "center", alignItems: "center" }]}>
        <Text>
          No allergies listed! Press the plus button to add one.
        </Text>
      </View>
    )
  }
  return (
    <View>
      
    </View>
  )
}