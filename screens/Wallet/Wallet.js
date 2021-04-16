import React from "react"
import { View, Text } from "react-native"
import { styles } from "./walletStyles"
import { NavigationBar } from "../../components/Footer"
import { Form, Item, Label, Input, Button } from "native-base"
import { token } from "../../token/Token"

export default function Wallet({ navigation }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Wallet balance</Text>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  )
}
