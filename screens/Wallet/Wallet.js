import React from "react"
import { View, Text } from "react-native"
import { styles } from "./walletStyles"
import { Form, Item, Label, Input, Button } from "native-base"
import { token } from "../../token/Token"

export default function Wallet({ navigation }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text>Wallet balance</Text>
        <Text>{token}</Text>
      </View>
    </View>
  )
}
