export const historicalPrice = (data) => {
  first = data.quote.EUR.percent_change_1h
  second = data.quote.EUR.percent_change_24h
  third = data.quote.EUR.percent_change_7d
  fourth = data.quote.EUR.percent_change_30d
  fifth = data.quote.EUR.percent_change_60d

  actualPrice = data.quote?.EUR?.price

  let calculatedData = [
    Number(actualPrice) - (Number(actualPrice) / 100) * Number(fifth),
    Number(actualPrice) - (Number(actualPrice) / 100) * Number(fourth),
    Number(actualPrice) - (Number(actualPrice) / 100) * Number(third),
    Number(actualPrice) - (Number(actualPrice) / 100) * Number(second),
    Number(actualPrice) - (Number(actualPrice) / 100) * Number(first),
  ]
  console.log(calculatedData)
  return calculatedData
}
