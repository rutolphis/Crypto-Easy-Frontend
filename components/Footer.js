import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { styles } from "../screens/Market/marketStyles"

export function NavigationBar({ navigation }) {
  const handleWalletClick = () => {
    console.log("click wall")
    navigation.navigate("Wallet")
  }
  const handleMarketClick = () => {
    console.log("click mar")
    navigation.navigate("Market")
  }
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Market")}
        style={styles.spaceBetweenRight}
      >
        <Image
          source={require("../images/market.png")}
          style={styles.bottomImgLeft}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Wallet")}
        style={styles.spaceBetweenLeft}
      >
        <Image
          source={require("../images/wallet.png")}
          style={styles.bottomImgRight}
        />
      </TouchableOpacity>
    </View>
  )
}
