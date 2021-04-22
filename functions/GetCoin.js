import React from "react"

export async function getCoin() {
  let response = await fetch("http://192.168.1.111:8000/cryptodetail", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  let json = await response.json()

  return json
}
