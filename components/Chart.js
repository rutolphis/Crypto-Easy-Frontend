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
      color: "#00b8ff",
    },
    {
      name: "ethereum",
      amount: wallet.ethereum_balance ? wallet.ethereum_balance : 0,
      color: "#009bd6",
    },
    {
      name: "cardano",
      amount: wallet.cardano_balance ? wallet.cardano_balance : 0,
      color: "#00719c",
    },
    {
      name: "litecoin",
      amount: wallet.litecoin_balance ? wallet.litecoin_balance : 0,
      color: "#00415a",
    },
    {
      name: "polkadot",
      amount: wallet.polkadot_balance ? wallet.polkadot_balance : 0,
      color: "#001f2b",
    },
    {
      name: "euro",
      amount: wallet.eur_balance ? wallet.eur_balance : 0,
      color: "#00193d",
    },
  ]
  return (
    <PieChart
      data={data}
      height={300}
      accessor={"amount"}
      width={300}
      hasLegend={false}
      chartConfig={chartConfig}
      backgroundColor={"transparent"}
      paddingLeft={"65"}
      absolute
    />
  )
}
