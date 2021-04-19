import { getToken } from "../token/Token"

export async function getInfo() {
  let response = await fetch("http://192.168.191.118:8000/info", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getToken(),
    }),
  })

  let json = await response.json()

  return json
}
