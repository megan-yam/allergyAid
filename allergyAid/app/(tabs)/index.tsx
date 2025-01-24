import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const [allergies, setAllergies] = useState([""]);
  const [menuVisible, showMenu] = useState(false);

  const push = (allergy: string) => {
    setAllergies([allergy,...allergies]);
  }

  const toggleMenu = () => {
    showMenu(!menuVisible);
  }
  
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