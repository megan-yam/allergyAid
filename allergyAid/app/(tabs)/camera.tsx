import React from 'react'
import { Text, View } from 'react-native'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

export default function camera() {
  const device = useCameraDevice('back')

  // if (device == null) return <NoCamera />
  return (
    <Camera
      // style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
}