import { getCoin } from "./GetCoin"
import { useState, useEffect } from "react"
import cryptoTemplate from "../components/CryptoTemplate"

export function getCryptoToEurBalance() {
  const [response, setResponse] = useState(cryptoTemplate)
  useEffect(() => {
    getCoin().then((json) => {
      setResponse(json)
    })
  }, [])
  return response
}
