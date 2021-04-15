import React from "react"
import { View, Text, Image } from "react-native"
import { Icon, Footer, FooterTab, Button } from "native-base"
import { styles } from "./marketStyles"
import { token } from "../../token/Token"
import NavigationBar from '../../components/Footer'
import Coin from '../../components/CoinInfo'

export default function Market({ navigation }) {

  const handleWalletClick = () => {
    console.log("click")
    // navigation.navigate("Wallet")
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Market</Text>
        <Coin style={{alignItems: 'stretch'}}/>
        <NavigationBar/>
      </View>
    </View>
  )
}
