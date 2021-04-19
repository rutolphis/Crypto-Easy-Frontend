import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./walletStyles"
import { NavigationBar } from "../../components/Footer"
import { Chart } from "../../components/Chart"
import { getInfo } from "../../functions/GetInfo"
import { formatNumber } from "../../functions/numberFormat"

export default function Wallet({ navigation }) {
  const [wallet, setWallet] = useState("")
  getInfo().then((json) => {
    setWallet(json["Wallet"])
  })

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Wallet balance</Text>
        <Text style={styles.price}>
          € {formatNumber(parseFloat(wallet.eur_balance))}
        </Text>
        <TouchableOpacity style={styles.plus}>
          <Image
            source={require("../../images/plus.png")}
            style={styles.plusLogo}
          />
        </TouchableOpacity>
        <Chart wallet={wallet} />
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  )
}
