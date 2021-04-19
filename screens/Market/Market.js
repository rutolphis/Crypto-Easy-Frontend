import React from "react"
import { View, Text } from "react-native"
import { styles } from "./marketStyles"
import { NavigationBar } from "../../components/Footer"
import Coin from "../../components/CoinInfo"

export default function Market({ navigation }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Market</Text>
        <Coin navigation={navigation} style={{ alignItems: "stretch" }} />
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  )
}
