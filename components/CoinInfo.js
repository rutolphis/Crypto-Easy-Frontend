import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { getCoin } from "../functions/GetCoin"
import { getInfo } from "../functions/GetInfo"

const Coin = ({ navigation }) => {
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

  useEffect(() => {
    getCoin().then((json) => {
      setResponse(json)
    })
  }, [])

  return (
    <View style={(styles.mainContainer, { marginTop: 10 })}>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 1 })}>
        <View style={styles.container}>
          <Image
            style={styles.btcLogo}
            source={require("../images/btc-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.BTC.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.BTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {Number(
              parseFloat(response.api_response.BTC.quote.EUR.price).toFixed(2)
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/eth-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.ETH.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.ETH.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {Number(
              parseFloat(response.api_response.ETH.quote.EUR.price).toFixed(2)
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/ltc-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.LTC.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.LTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {Number(
              parseFloat(response.api_response.LTC.quote.EUR.price).toFixed(2)
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/cardano-logo.webp")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.ADA.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.ADA.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {Number(
              parseFloat(response.api_response.ADA.quote.EUR.price).toFixed(2)
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/polka-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.DOT.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.DOT.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {Number(
              parseFloat(response.api_response.DOT.quote.EUR.price).toFixed(2)
            )}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Coin

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },

  btcLogo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  etcLogo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  textContainer: {
    marginLeft: 17,
    marginRight: 200,
  },

  price: {
    marginLeft: 250,
    color: "#35424a",
    fontWeight: "bold",
    position: "absolute",
    fontSize: 16,
  },

  textTitle: {
    color: "#0c6cf5",
    fontWeight: "bold",
    fontSize: 18,
  },

  textSymbol: {
    color: "#3d8af7",
    fontWeight: "bold",
    fontSize: 18,
  },
})
