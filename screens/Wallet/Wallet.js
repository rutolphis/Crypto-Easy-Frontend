import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./walletStyles"
import { NavigationBar } from "../../components/Footer"
import { ChartPie } from "../../components/Chart"
import { WalletDetail } from "../../components/WalletDetail"
import { getInfo } from "../../functions/GetInfo"
import { getCryptoToEurBalance } from "../../functions/getCryptoToEurBalance"
import { formatNumber } from "../../functions/numberFormat"
import { useEffect } from "react/cjs/react.development"

export default function Wallet({ navigation }) {
  const [photo, setPhoto] = useState(
    "R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
  )
  const [wallet, setWallet] = useState("")
  useEffect(() => {
    getInfo().then((json) => {
      setWallet(json["Wallet"])
      setPhoto(json.PersonalInfo.photo)
      console.log(photo.substring(0, 30))
    })
  }, [])
  const images = {
    crypto: {
      eur: require("../../images/eur-logo.png"),
      btc: require("../../images/btc-logo.png"),
      ada: require("../../images/cardano-logo.webp"),
      ltc: require("../../images/ltc-logo.png"),
      polka: require("../../images/polka-logo.png"),
      eth: require("../../images/eth-logo.png"),
    },
  }

  let response = getCryptoToEurBalance()

  let btcEur_balance =
    wallet.bitcoin_balance * response.api_response.BTC.quote.EUR.price
  let ethEur_balance =
    wallet.ethereum_balance * response.api_response.ETH.quote.EUR.price
  let adaEur_balance =
    wallet.cardano_balance * response.api_response.ADA.quote.EUR.price
  let ltcEur_balance =
    wallet.litecoin_balance * response.api_response.LTC.quote.EUR.price
  let dotEur_balance =
    wallet.polkadot_balance * response.api_response.DOT.quote.EUR.price
  let eurBalance = wallet.eur_balance
  let totalBalance =
    btcEur_balance +
    ethEur_balance +
    adaEur_balance +
    ltcEur_balance +
    dotEur_balance +
    eurBalance

  let availableBtc = eurBalance / response.api_response.BTC.quote.EUR.price
  let availableEth = eurBalance / response.api_response.ETH.quote.EUR.price
  let availableLtc = eurBalance / response.api_response.LTC.quote.EUR.price
  let availableAda = eurBalance / response.api_response.ADA.quote.EUR.price
  let availableDot = eurBalance / response.api_response.DOT.quote.EUR.price

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.title}>Wallet balance</Text>
          <Text style={styles.price}>
            € {formatNumber(parseFloat(totalBalance))}
          </Text>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => navigation.navigate("Deposit")}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 400 / 2,
                marginRight: 10,
              }}
              source={{ uri: `data:image/jpg;base64,${photo}` }}
            />
          </TouchableOpacity>
        </View>
        <ChartPie wallet={wallet} />
        <View style={{ height: 300 }}>
          <ScrollView>
            <WalletDetail
              logoSrc={images.crypto.eur}
              name={"EURO"}
              crypto_balance={wallet.eur_balance}
              eur_balance={eurBalance}
              crypto_sym={"EUR"}
              css={"none"}
            />
            <WalletDetail
              logoSrc={images.crypto.btc}
              name={"Bitcoin"}
              crypto_balance={wallet.bitcoin_balance}
              eur_balance={btcEur_balance}
              crypto_sym={"BTC"}
              css={"flex"}
              crypto={1}
              navigation={navigation}
              availableBuy={availableBtc}
            />
            <WalletDetail
              logoSrc={images.crypto.eth}
              name={"Ethereum"}
              crypto_balance={wallet.ethereum_balance}
              eur_balance={ethEur_balance}
              crypto_sym={"ETH"}
              css={"flex"}
              crypto={2}
              navigation={navigation}
              availableBuy={availableEth}
            />
            <WalletDetail
              logoSrc={images.crypto.ltc}
              name={"Litecoin"}
              crypto_balance={wallet.litecoin_balance}
              eur_balance={ltcEur_balance}
              crypto_sym={"LTC"}
              css={"flex"}
              crypto={3}
              navigation={navigation}
              availableBuy={availableLtc}
            />
            <WalletDetail
              logoSrc={images.crypto.ada}
              name={"Cardano"}
              crypto_balance={wallet.cardano_balance}
              eur_balance={adaEur_balance}
              crypto_sym={"ADA"}
              css={"flex"}
              crypto={4}
              navigation={navigation}
              availableBuy={availableAda}
            />
            <WalletDetail
              logoSrc={images.crypto.polka}
              name={"Polkadot"}
              crypto_balance={wallet.polkadot_balance}
              eur_balance={dotEur_balance}
              crypto_sym={"DOT"}
              css={"flex"}
              crypto={5}
              navigation={navigation}
              availableBuy={availableDot}
            />
          </ScrollView>
        </View>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  )
}
