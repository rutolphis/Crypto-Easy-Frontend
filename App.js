import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'

export default function App() {
  const [token,setToken] = useState()
  
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
});
