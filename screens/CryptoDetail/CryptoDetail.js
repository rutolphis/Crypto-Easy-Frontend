import React, { useState, useEffect } from "react"
import { View, Image, Text } from "react-native"
import { Form, Item, Label, Input, Button } from "native-base"
import { getToken } from "../../token/Token"
import { getInfo } from "../../functions/GetInfo"
import { getCoin } from "../../functions/GetCoin"

export default function CryptoDetail({ navigation , crypto}) {

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

      const [personalInfo, setPersonalInfo] = useState()

      useEffect(() => {
        getCoin().then((json) => {setResponse(json)}) 
        getInfo().then((json) => {setPersonalInfo(json)})
      }, [])
      
      console.log(personalInfo)

      return (
          <View>
              <Text>CryptoInfo</Text>
          </View>
      )
}