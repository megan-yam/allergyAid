import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/build/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign';

function _layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Allergies',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name = "camera"
        options ={{
          title: "Scan Barcode",
          tabBarIcon:({ color }) => <AntDesign name="camera" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name = "settings"
        options ={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size ={28} name = "cog" color={color}/>
        }}
      />
    </Tabs>
  )
}

export default _layout