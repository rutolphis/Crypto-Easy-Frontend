import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const Coin = () => {
  const cryptoTemplate = {
    data: {
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
    const getCoin = () => {
      fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,LTC,ADA,DOT&convert=EUR",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": "89491b09-0f1e-4585-80cf-a13097fdc682",
          },
        }
      )
        .then((res) => {
          let resultToPass = res.json()
          return resultToPass
        })
        .then((data) => {
          setResponse(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    getCoin()
  }, [])

  return (
    <View style={(styles.mainContainer, { marginTop: 20 })}>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.btcLogo}
            source={require("../images/btc-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={{ color: "#0c6cf5", fontWeight: "bold" }}>
              {response.data.BTC.name}
            </Text>
            <Text style={{ color: "#3d8af7", fontWeight: "bold" }}>
              {response.data.BTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            € {Number(parseFloat(response.data.BTC.quote.EUR.price).toFixed(2))}
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
            <Text style={{ color: "#0c6cf5", fontWeight: "bold" }}>
              {response.data.ETH.name}
            </Text>
            <Text style={{ color: "#3d8af7", fontWeight: "bold" }}>
              {response.data.ETH.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            € {Number(parseFloat(response.data.ETH.quote.EUR.price).toFixed(2))}
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
            <Text style={{ color: "#0c6cf5", fontWeight: "bold" }}>
              {response.data.LTC.name}
            </Text>
            <Text style={{ color: "#3d8af7", fontWeight: "bold" }}>
              {response.data.LTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            € {Number(parseFloat(response.data.LTC.quote.EUR.price).toFixed(2))}
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
            <Text style={{ color: "#0c6cf5", fontWeight: "bold" }}>
              {response.data.ADA.name}
            </Text>
            <Text style={{ color: "#3d8af7", fontWeight: "bold" }}>
              {response.data.ADA.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            € {Number(parseFloat(response.data.ADA.quote.EUR.price).toFixed(2))}
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
            <Text style={{ color: "#0c6cf5", fontWeight: "bold" }}>
              {response.data.DOT.name}
            </Text>
            <Text style={{ color: "#3d8af7", fontWeight: "bold" }}>
              {response.data.DOT.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            € {Number(parseFloat(response.data.DOT.quote.EUR.price).toFixed(2))}
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
    fontWeight: "bold",
    position: "absolute",
  },
})
