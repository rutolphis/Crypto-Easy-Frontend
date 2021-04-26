import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Form, Item, Label, Input, Button } from "native-base"
import { getToken } from "../../token/Token"
import { getInfo } from "../../functions/GetInfo"
import { getCoin } from "../../functions/GetCoin"
import { styles } from "../Wallet/walletStyles"
import { formatNumber } from "../../functions/numberFormat"

export default function CryptoDetail({ navigation }) {
    const crypto = navigation.getParam('crypto')

    const cryptoTemplate = {
        api_response: {
          BTC: {
            name: undefined,
            symbol: undefined,
            quote: {
              EUR: {
                price: 1,
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
        getCoin().then((json) => {
          if(crypto == 1){
            setResponse(json.api_response.BTC)}
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
        //getInfo().then((json) => {setPersonalInfo(json)})
        console.log(response)
      }, [])
      
      return (
        <View style={styles.containerMain}>
        <View style={styles.container}>
          <Text style={styles.title}>{response.name} balance</Text>
          <Text style={styles.price}>{formatNumber(
              Number(parseFloat(response.quote.EUR.price)))}€ </Text>
        </View>
      </View>
      )
}