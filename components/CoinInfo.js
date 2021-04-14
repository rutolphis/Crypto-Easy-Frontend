import React, { useState , useEffect} from "react"
import { View, Text, Image } from "react-native"


const Coin = () => {

    const cryptoTemplate = {
        data:[ {
            name: undefined,
            symbol: undefined,
            quote: {
                EUR: {
                    price: 1
                }
            }
        },
        {
        name: undefined,
            symbol: undefined,
            quote: {
                EUR: {
                    price: 1
                }
            }
        },
        {
            name: undefined,
                symbol: undefined,
                quote: {
                    EUR: {
                        price: 1
                    }
                }
            },
            {
                name: undefined,
                    symbol: undefined,
                    quote: {
                        EUR: {
                            price: undefined
                        }
                    }
                },
                {
                    name: undefined,
                        symbol: undefined,
                        quote: {
                            EUR: {
                                price: undefined
                            }
                        }
                    },
                    {
                        name: undefined,
                            symbol: undefined,
                            quote: {
                                EUR: {
                                    price: 1
                                }
                            }
                        }, 
                        {
                            name: undefined,
                                symbol: undefined,
                                quote: {
                                    EUR: {
                                        price: 1
                                    }
                                }
                            }
    ]
    }
    
    const [response,setResponse] = useState(cryptoTemplate)

    useEffect(()=>{
    
    const getCoin = () => {
        fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=7&convert=EUR", {
            method: "GET",
            headers: {
            Accept: "application/json",
            'X-CMC_PRO_API_KEY' : '89491b09-0f1e-4585-80cf-a13097fdc682'
            }
        }).then(res => { 
            let resultToPass = res.json();
            return resultToPass;
        })
        .then(data => {
            console.log(data)
          setResponse(data);
        })
        .catch( error => {
        console.error(error)
        })   
    }

    getCoin()
    }, [])

    return (
    <View>
        <View>
            <Image/>
            <Text>{response.data[0] ? response.data[0].name : '...' }</Text>
            <Text>{response.data[0].quote.EUR.price}</Text>
        </View>
        <View>
            <Image/>
            <Text>{response.data[1].name }</Text>
            <Text>{response.data[1].quote.EUR.price}</Text>
        </View>
        <View>
            <Image/>
            <Text>{response.data[3].name }</Text>
            <Text>{response.data[3].quote.EUR.price}</Text>
        </View>
        <View>
            <Image/>
            <Text>{response.data[4].name}</Text>
            <Text>{response.data[4].quote.EUR.price}</Text>
        </View>
        <View>
            <Image/>
            <Text>{response.data[6].name}</Text>
            <Text>{response.data[6].quote.EUR.price}</Text>
        </View>
    </View>
    )
    } 


export default Coin;
