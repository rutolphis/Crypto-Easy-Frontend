import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native"
import { Button } from "native-base"
import React, { useState, useEffect } from "react"
import { getInfo } from "../functions/GetInfo"
import { getToken } from "../token/Token"
import { formatNumber } from "../functions/numberFormat"

export default function Sell({ navigation }) {
  const handleSell = () => {
    console.log("som tu")
    fetch("http://192.168.191.118:8000/sell", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: value,
        cryptocurrency: cryptoSymbol,
        token: getToken(),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setState(true)
        if (json.response == "Not enough crypto") {
          setBuyResult("Not enough crypto to sell...")
          setCss("flex")
          setColor("red")
        } else if (json.response == "Cryptocurrency selled") {
          setBuyResult("Cryptocurrency sucesfully selled!")
          setCss("flex")
          setColor("#0c6cf5")
        } else if (json.response == "No permission") {
          setBuyResult("No permission!")
          setCss("flex")
          setColor("red")
        }
      })
  }

  const crypto = navigation.getParam("crypto")
  const availableSell = navigation.getParam("availableSell")
  const cryptoBalance = navigation.getParam("cryptoBalance")

  const [cryptoSymbol, setCryptoBalance] = useState("")
  const [eurBalance, setEurBalance] = useState(0)
  const [value, setValue] = useState(0)
  const [state, setState] = useState(false)
  const [buyResult, setBuyResult] = useState("")
  const [css, setCss] = useState("none")
  const [color, setColor] = useState("red")

  useEffect(() => {
    getInfo().then((json) => {
      if (crypto == 1) {
        setCryptoBalance("BTC")
      } else if (crypto == 2) {
        setCryptoBalance("ETH")
      } else if (crypto == 3) {
        setCryptoBalance("LTC")
      } else if (crypto == 4) {
        setCryptoBalance("ADA")
      } else if (crypto == 5) {
        setCryptoBalance("DOT")
      }
      setEurBalance(json?.Wallet?.eur_balance)
    })
  }, [])
  return (
    <View style={styles.containerMain}>
      <Text style={styles.title}>Sell</Text>
      <Text style={styles.subTitle}>Get cash for your {cryptoSymbol}</Text>
      <Text style={styles.subTitle}>
        {availableSell} {cryptoSymbol} available to sell
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={cryptoSymbol + " " + 0}
          placeholderTextColor="#0c6cf5"
          numeric
          keyboardType={"numeric"}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <View style={styles.containerCryptoDetail}>
        <Text style={styles.cryptoDetailText}>Wallet</Text>
        <View>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 165,
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            € {formatNumber(eurBalance)}
          </Text>
          <Text
            style={{
              marginLeft: 165,
              fontSize: 12,
              fontWeight: "bold",
              color: "#c0c0c0",
            }}
          >
            {cryptoBalance}
            {cryptoSymbol}
          </Text>
        </View>
      </View>
      <View>
        <Button
          block
          light
          style={styles.cryptoDetailButton}
          onPress={() => handleSell()}
        >
          <Text style={styles.cryptoDetailButton}>Sell</Text>
        </Button>
      </View>
      <Modal
        visible={state}
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        onRequestClose={() => {
          setState(false)
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000aa",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: color,
              marginTop: "133%",
              width: "100%",
              height: "30%",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setState(false)
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  alignSelf: "flex-end",
                  marginRight: 20,
                  marginTop: 20,
                }}
              >
                x
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                display: css,
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: "13%",
              }}
            >
              {buyResult}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "#0c6cf5",
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  title: {
    marginTop: "25%",
    alignSelf: "center",
    color: "#35424a",
    fontWeight: "bold",
    fontSize: 17,
  },
  subTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#606060",
    fontSize: 14,
  },
  textInputStyle: {
    borderColor: "black",
    marginTop: "30%",
    fontSize: 43,
    color: "#0c6cf5",
  },
  containerCryptoDetail: {
    marginBottom: "20%",
    flexDirection: "row",
    width: "75%",
    height: "6%",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#d6d6d6",
  },
  cryptoDetailText: {
    marginLeft: 15,
    color: "#35424a",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 17,
  },
  cryptoDetailButton: {
    backgroundColor: "#d6d6d6",
    color: "#35424a",
    fontWeight: "bold",
    width: 290,
    textAlign: "center",
    margin: 40,
    fontSize: 17,
    borderRadius: 7,
    alignSelf: "center",
  },
})
