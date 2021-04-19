import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./walletStyles"
import { NavigationBar } from "../../components/Footer"
import { Form, Item, Label, Input, Button } from "native-base"
import { getToken } from "../../token/Token"
import { PieChart } from "react-native-chart-kit"
import { getInfo } from "../../functions/GetInfo"
import { useState } from "react"

export default function Wallet({ navigation }) {
  const [wallet, setWallet] = useState("")
  getInfo().then((json) => {
    setWallet(json["Wallet"])
  })

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Wallet balance</Text>
        <Text style={styles.price}>€ {wallet.eur_balance}</Text>
        <TouchableOpacity style={styles.plus}>
          <Image
            source={require("../../images/plus.png")}
            style={styles.plusLogo}
          />
        </TouchableOpacity>
        {/* <PieChart
          height={220}
          accessor={"population"}
          backgroundColor={"blue"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        /> */}
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  )
}
