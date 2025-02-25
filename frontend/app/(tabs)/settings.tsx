import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function Settings() {
  const [loggedIn, setLogin] = useState(false);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ members: [] });  // Ensure initial state is structured correctly

  return (
    <View>
      <Button title="Login" onPress={() => console.log("Login Pressed")} />
      <Button title="Logout" onPress={() => console.log("Logout Pressed")} />
      <Button title="Create an account" onPress={() => console.log("Sign Up Pressed")} />
    </View>
  );
}
