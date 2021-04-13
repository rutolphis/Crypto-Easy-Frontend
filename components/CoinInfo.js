import React from "react"
import { View, Text, Image } from "react-native"

const Coin = () => {
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=EUR", {
        method: "GET",
        headers: {
        Accept: "application/json",
        'X-CMC_PRO_API_KEY' : '89491b09-0f1e-4585-80cf-a13097fdc682'
        }
    }).then((response) => response.json()).then((json) => {
        console.log(json.data[0].quote.EUR.price)
    })

    return (
        <Text>Ahoj</Text>
    )
    } 

export default Coin;
