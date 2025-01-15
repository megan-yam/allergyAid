import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function settings() {
  const [loggedIn, setLogin] = useState(false);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

  }

  const handleLogout = () => {

  }

  const handleSignIn = () => {
    
  }

  return (
    <View>
      <Button title="Login"/>
      <Button title="Logout"/>
      <Button title="Create an account"/>
    </View>
  )
}

