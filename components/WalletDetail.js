import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { formatNumber } from "../functions/numberFormat"

export const WalletDetail = ( info ) => {
  
  
  let coin = info.crypto ?  info.crypto : 1
  let logoSrc = info.logoSrc ? info.logoSrc : "21"
  let name = info.name ? info.name : "name"
  let eur_balance = info.eur_balance ? info.eur_balance : 0
  let crypto_balance = info.crypto_balance ? info.crypto_balance : 0
  let crypto_sym = info.crypto_sym ? info.crypto_sym : "SYM"

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => info?.navigation.navigate("CryptoDetail", {crypto : coin})}>
        <View style={styles.container}>
          <Image source={logoSrc} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{name}</Text>
          </View>
          <Text style={styles.price}>
            € {formatNumber(parseFloat(eur_balance))}
          </Text>
        </View>
        <View style={styles.cryptoContainer}>
          <Text style={(styles.textSymbol, { display: info.css })}>
            {formatNumber(parseFloat(crypto_balance))}
          </Text>
          <Text style={(styles.textSymbol, { display: info.css })}>
            {crypto_sym}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default WalletDetail

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },

  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  textContainer: {
    marginLeft: 17,
    marginRight: 200,
    marginTop: 8,
  },
  cryptoContainer: {
    position: "absolute",
    flexDirection: "row",
    marginLeft: 250,
    marginTop: 25,
  },

  price: {
    marginLeft: 250,
    color: "#35424a",
    position: "absolute",
    fontSize: 18,
  },

  textTitle: {
    color: "#35424a",
    fontSize: 18,
  },

  textSymbol: {
    color: "#c0c0c0",
    fontSize: 16,
  },
})
