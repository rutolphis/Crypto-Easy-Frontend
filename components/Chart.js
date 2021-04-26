import React from "react"
import { View, Text } from "react-native"
import { PieChart , LineChart} from "react-native-chart-kit"
import { getCryptoToEurBalance } from "../functions/getCryptoToEurBalance"

export const ChartPie = (wallet) => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }
  let response = getCryptoToEurBalance()

  const data = [
    {
      name: "bitcoin",
      amount:
        wallet.wallet.bitcoin_balance ||
        response.api_response.BTC.quote.EUR.price
          ? wallet.wallet.bitcoin_balance *
            response.api_response.BTC.quote.EUR.price
          : 0,
      color: "#003A6B",
    },
    {
      name: "ethereum",
      amount:
        wallet.wallet.ethereum_balance ||
        response.api_response.ETH.quote.EUR.price
          ? wallet.wallet.ethereum_balance *
            response.api_response.ETH.quote.EUR.price
          : 0,
      color: "#1B5886",
    },
    {
      name: "cardano",
      amount:
        wallet.wallet.cardano_balance ||
        response.api_response.ADA.quote.EUR.price
          ? wallet.wallet.cardano_balance *
            response.api_response.ADA.quote.EUR.price
          : 0,
      color: "#3776A1",
    },
    {
      name: "litecoin",
      amount:
        wallet.wallet.litecoin_balance ||
        response.api_response.LTC.quote.EUR.price
          ? wallet.wallet.litecoin_balance *
            response.api_response.LTC.quote.EUR.price
          : 0,
      color: "#5293BB",
    },
    {
      name: "polkadot",
      amount:
        wallet.wallet.polkadot_balance ||
        response.api_response.DOT.quote.EUR.price
          ? wallet.wallet.polkadot_balance *
            response.api_response.DOT.quote.EUR.price
          : 0,
      color: "#6EB1D6",
    },
    {
      name: "euro",
      amount: wallet.wallet.eur_balance ? wallet.wallet.eur_balance : 1,
      color: "#89CFF1",
    },
  ]

  if (!data[1].amount) {
    return <View></View>
  }
  return (
    <PieChart
      data={data}
      height={200}
      accessor={"amount"}
      width={200}
      hasLegend={false}
      chartConfig={chartConfig}
      backgroundColor={"transparent"}
      paddingLeft={"55"}
      absolute
    />
  )
}

export const ChartLine = (dataset) => {
  const chartConfig={
    backgroundColor: 'blue',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    }
  }
  
  
  const data = {
    
    datasets: [
      {
        data: dataset.data,
        strokeWidth: 3 // optional
      }
    ],
  };

  return (<LineChart
    withHorizontalLines={false}
    withVerticalLines={false}
    data={data}
    width={300}
    height={220}
    chartConfig={chartConfig}
    withHorizontalLabels={false}
  />)
}