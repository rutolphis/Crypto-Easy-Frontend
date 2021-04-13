import React from "react"
import { View, Text, Image } from "react-native"
import { Icon, Footer, FooterTab, Button } from "native-base"
import { styles } from "./marketStyles"
import { token } from "../../token/Token"

export default function Market({ navigation }) {
  const handleWalletClick = () => {
    console.log("click")
    // navigation.navigate("Wallet")
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Market</Text>
        <View style={styles.bottomBar}>
          <Image
            source={require("../../images/market.png")}
            style={styles.bottomImgLeft}
          />
          <Image
            source={require("../../images/wallet.png")}
            style={styles.bottomImgRight}
          />
        </View>
      </View>
    </View>
  )
}
