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

export default function Buy({ navigation }) {
  const handleDeposit = () => {
    fetch("http://192.168.1.111:8000/deposit", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: value,
        token: getToken(),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setState(true)
        if (json.response == "Deposit added") {
          setBuyResult("Deposit sucesfully added!")
          setCss("flex")
          setColor("#0c6cf5")
        } else if (json.response == "No permission") {
          setBuyResult("No permission!")
          setCss("flex")
          setColor("red")
        }
      })
  }

  const [value, setValue] = useState(0)
  const [state, setState] = useState(false)
  const [buyResult, setBuyResult] = useState("")
  const [css, setCss] = useState("none")
  const [color, setColor] = useState("red")

  return (
    <View style={styles.containerMain}>
      <Text style={styles.title}>Deposit</Text>
      <Text style={styles.subTitle}>Deposit funds from your bank account</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="€0"
          placeholderTextColor="#0c6cf5"
          numeric
          keyboardType={"numeric"}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <View style={styles.containerCryptoDetail}>
        <Text style={styles.cryptoDetailText}> XXXX XXXX XXXX XXXX</Text>
        <View>
          <Text
            style={{
              marginLeft: 130,
              margin: 8,
              color: "#35424a",
              fontWeight: "bold",
              fontSize: 17,
            }}
          ></Text>
        </View>
      </View>
      <View>
        <Button
          block
          light
          style={styles.cryptoDetailButton}
          onPress={() => handleDeposit()}
        >
          <Text style={styles.cryptoDetailButton}>Deposit</Text>
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
            <TouchableOpacity onPress={() => {navigation.navigate("Wallet")}}>
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
    fontSize: 19,
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
    padding: 3,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#d6d6d6",
    textAlign: "center",
    alignSelf: "center",
  },
  cryptoDetailText: {
    color: "#35424a",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 17,
    marginLeft: 45
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
