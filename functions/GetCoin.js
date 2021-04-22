export async function getCoin() {
  let response = await fetch("http://192.168.191.118:8000/cryptodetail", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  let json = await response.json()

  return json
}
