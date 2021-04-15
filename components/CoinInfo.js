import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

const Coin = () => {
  const cryptoTemplate = {
    data: [
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
      {
        name: undefined,
        symbol: undefined,
        quote: {
          EUR: {
            price: undefined,
          },
        },
      },
    ],
  }

  const [response, setResponse] = useState(cryptoTemplate)

  useEffect(() => {
    const getCoin = () => {
      fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=7&convert=EUR",
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
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.btcLogo}
          source={require("../images/btc-logo.png")}
        />
        <View style={styles.textContainer}>
          <Text>{response.data[0].name}</Text>
          <Text>{response.data[0].symbol}</Text>
        </View>
        <Text style={styles.price}>{response.data[0].quote.EUR.price}</Text>
      </View>
      <View style={styles.container}>
        <Image />
        <View style={styles.textContainer}>
          <Text>{response.data[1].name}</Text>
          <Text>{response.data[1].symbol}</Text>
        </View>
        <Text>{response.data[1].quote.EUR.price}</Text>
      </View>
      <View style={styles.container}>
        <Image />
        <View style={styles.textContainer}>
          <Text>{response.data[3].name}</Text>
          <Text>{response.data[3].symbol}</Text>
        </View>
        <Text>{response.data[3].quote.EUR.price}</Text>
      </View>
      <View style={styles.container}>
        <Image />
        <View style={styles.textContainer}>
          <Text>{response.data[4].name}</Text>
          <Text>{response.data[4].symbol}</Text>
        </View>
        <Text>{response.data[4].quote.EUR.price}</Text>
      </View>
      <View style={styles.container}>
        <Image />
        <View style={styles.textContainer}>
          <Text>{response.data[6].name}</Text>
          <Text>{response.data[6].symbol}</Text>
        </View>
        <Text>{response.data[6].quote.EUR.price}</Text>
      </View>
    </View>
  )
}

export default Coin

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },

  btcLogo: {
    flex: 1,
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },

  price: {
    flex: 1,
  },
})
