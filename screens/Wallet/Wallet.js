import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./walletStyles"
import { NavigationBar } from "../../components/Footer"
import { Form, Item, Label, Input, Button } from "native-base"
import { getToken } from "../../token/Token"
import { PieChart } from "react-native-chart-kit"

export default function Wallet({ navigation }) {
  const token = getToken()
  const getInfo = () => {
    fetch("http://192.168.191.118:8000/info", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    }).then((response) => response.json())
  }
  console.log(getInfo())
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Wallet balance</Text>
        <Text style={styles.price}>€ 300,00</Text>
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
