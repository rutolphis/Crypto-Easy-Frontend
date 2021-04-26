import React, { useState, useEffect } from "react"
import { View, Text} from "react-native"
import { Button } from "native-base"
import { getToken } from "../../token/Token"
import { getInfo } from "../../functions/GetInfo"
import { getCoin } from "../../functions/GetCoin"
import { styles } from "../Wallet/walletStyles"
import { formatNumber } from "../../functions/numberFormat"
import { ChartLine} from "../../components/Chart"

export default function CryptoDetail({ navigation }) {
    const crypto = navigation.getParam('crypto')

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

      const [personalInfo, setPersonalInfo] = useState('')

      useEffect(() => {
        getInfo().then((json) => {
          if(crypto == 1){
          setPersonalInfo(json.Wallet.bitcoin_balance)
        }
        else if(crypto == 2){
          setPersonalInfo(json.Wallet.ethereum_balance)
        }
        else if(crypto == 3){
          setPersonalInfo(json.Wallet.litecoin_balance)
        }
        else if(crypto == 4){
          setPersonalInfo(json.Wallet.cardano_balance)
        }
        else if(crypto == 5){
          setPersonalInfo(json.Wallet.polkadot_balance)
        }})

        getCoin().then((json) => {
          if(crypto == 1){
            setResponse(json.api_response.BTC)
          }
          else if(crypto == 2){
            setResponse(json.api_response.ETH)
          }
          else if(crypto == 3){
            setResponse(json.api_response.LTC)
          }
          else if(crypto == 4){
            setResponse(json.api_response.ADA)
          }
          else if(crypto == 5){
            setResponse(json.api_response.DOT)
          }
        }) 
      }, [])
      
      return (
        <View style={styles.containerMain}>
        <View style={styles.container}>
          <Text style={styles.title}>{response.name} balance</Text>
          <Text style={styles.price}>{formatNumber(
              Number(parseFloat(response.quote?.EUR?.price)))}€ </Text>
          <ChartLine/>
          <View style={styles.containerCryptoDetail}>
            <Text style={styles.cryptoDetailText}>{response.symbol} Wallet</Text>
            <View>
            <Text style = {{marginLeft: 130, fontSize: 12}}>€{formatNumber(parseFloat(Number(personalInfo)*Number(response.quote?.EUR?.price)))}</Text>
            <Text style = {{marginLeft: 130, fontSize: 10}}>{personalInfo}{response.symbol}</Text>
            </View>
          </View>
          <Button block light style={styles.cryptoDetailButton}>
            <Text style={styles.cryptoDetailButton}>Trade</Text>
          </Button>
        </View>
      </View>
      )
}