import React from "react"
import { PieChart } from "react-native-chart-kit"

export const Chart = (wallet) => {
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

  const data = [
    {
      name: "bitcoin",
      amount: wallet.bitcoin_balance ? wallet.bitcoin_balance : 1,
      color: "#003A6B",
    },
    {
      name: "ethereum",
      amount: wallet.ethereum_balance ? wallet.ethereum_balance : 0,
      color: "#1B5886",
    },
    {
      name: "cardano",
      amount: wallet.cardano_balance ? wallet.cardano_balance : 0,
      color: "#3776A1",
    },
    {
      name: "litecoin",
      amount: wallet.litecoin_balance ? wallet.litecoin_balance : 0,
      color: "#5293BB",
    },
    {
      name: "polkadot",
      amount: wallet.polkadot_balance ? wallet.polkadot_balance : 0,
      color: "#6EB1D6",
    },
    {
      name: "euro",
      amount: wallet.eur_balance ? wallet.eur_balance : 0,
      color: "#89CFF1",
    },
  ]
  return (
    <PieChart
      data={data}
      height={250}
      accessor={"amount"}
      width={250}
      hasLegend={false}
      chartConfig={chartConfig}
      backgroundColor={"transparent"}
      paddingLeft={"60"}
      absolute
    />
  )
}
