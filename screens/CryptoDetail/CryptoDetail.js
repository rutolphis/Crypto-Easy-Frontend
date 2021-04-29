import React, { useState, useEffect } from "react"
import { View, Text, Modal, TouchableOpacity } from "react-native"
import { Button } from "native-base"
import { getInfo } from "../../functions/GetInfo"
import { getCoin } from "../../functions/GetCoin"
import { styles } from "../Wallet/walletStyles"
import { formatNumber } from "../../functions/numberFormat"
import { ChartLine } from "../../components/Chart"
import { historicalPrice } from "../../functions/historicalPrice"

export default function CryptoDetail({ navigation }) {
  const crypto = navigation.getParam("crypto")
  const availableSell = navigation.getParam("availableSell")
  const availableBuy = navigation.getParam("availableBuy")

  const cryptoTemplate = {
    api_response: {
      BTC: {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      ETH: {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },

      LTC: {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      ADA: {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      DOT: {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
    },
  }

  const [response, setResponse] = useState(cryptoTemplate)
  const [personalInfo, setPersonalInfo] = useState("")
  const [historicalData, setHistoricalData] = useState([1, 2, 3, 4, 5])
  const [state, setState] = useState(false)

  useEffect(() => {
    getInfo().then((json) => {
      if (crypto == 1) {
        setPersonalInfo(json.Wallet.bitcoin_balance)
      } else if (crypto == 2) {
        setPersonalInfo(json.Wallet.ethereum_balance)
      } else if (crypto == 3) {
        setPersonalInfo(json.Wallet.litecoin_balance)
      } else if (crypto == 4) {
        setPersonalInfo(json.Wallet.cardano_balance)
      } else if (crypto == 5) {
        setPersonalInfo(json.Wallet.polkadot_balance)
      }
    })

    getCoin().then((json) => {
      if (crypto == 1) {
        setResponse(json.api_response.BTC)
      } else if (crypto == 2) {
        setResponse(json.api_response.ETH)
      } else if (crypto == 3) {
        setResponse(json.api_response.LTC)
      } else if (crypto == 4) {
        setResponse(json.api_response.ADA)
      } else if (crypto == 5) {
        setResponse(json.api_response.DOT)
      }
    })
  }, [])

  useEffect(() => {
    if (
      response != undefined &&
      response.name != undefined &&
      response != [1, 2, 3, 4, 5]
    )
      setHistoricalData(historicalPrice(response))
  }, [response])

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>{response.name} price</Text>
        <Text style={styles.cryptoDetailPrice}>
          {formatNumber(Number(parseFloat(response.quote?.EUR?.price)))}€{" "}
        </Text>
        <ChartLine data={historicalData} />
        <View style={styles.containerCryptoDetail}>
          <Text style={styles.cryptoDetailText}>{response.symbol} Wallet</Text>
          <View>
            <Text style={{ marginLeft: 130, fontSize: 13, fontWeight: "bold" }}>
              €
              {formatNumber(
                parseFloat(
                  Number(personalInfo) * Number(response.quote?.EUR?.price)
                )
              )}
            </Text>
            <Text
              style={{
                marginLeft: 130,
                fontSize: 12,
                fontWeight: "bold",
                color: "#c0c0c0",
              }}
            >
              {personalInfo}
              {response.symbol}
            </Text>
          </View>
        </View>
        <View style={{ visible: "None" }}>
          <Button
            block
            light
            style={styles.cryptoDetailButton}
            onPress={() => {
              setState(true)
            }}
          >
            <Text style={styles.cryptoDetailButton}>Trade</Text>
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
                backgroundColor: "#0c6cf5",
                width: "100%",
                height: "30%",
                borderRadius: 10,
                marginTop: 530,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                Want trade?
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "70%",
                  marginTop: 25,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row", marginTop: 30 }}
                  onPress={() =>
                    navigation.navigate("Buy", {
                      crypto: crypto,
                      availableBuy: availableBuy,
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#0c6cf5",
                      fontWeight: "bold",
                      fontSize: 25,
                      marginLeft: 20,
                      marginRight: 10,
                    }}
                  >
                    +
                  </Text>
                  <Text
                    style={{
                      color: "#35424a",
                      fontWeight: "bold",
                      fontSize: 17,
                      marginTop: 6,
                    }}
                  >
                    Buy {response.symbol}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: "row", marginTop: 15 }}
                  onPress={() =>
                    navigation.navigate("Sell", {
                      crypto: crypto,
                      availableSell: availableSell,
                      cryptoBalance: personalInfo,
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#0c6cf5",
                      fontWeight: "bold",
                      fontSize: 30,
                      marginLeft: 20,
                      marginRight: 10,
                    }}
                  >
                    -
                  </Text>
                  <Text
                    style={{
                      color: "#35424a",
                      fontWeight: "bold",
                      fontSize: 17,
                      marginTop: 8,
                    }}
                  >
                    Sell {response.symbol}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}
