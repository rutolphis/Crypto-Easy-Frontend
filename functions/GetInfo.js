import { getToken } from "../token/Token"

<<<<<<< HEAD
export async function getInfo(){
    let response = await fetch(
        "http://192.168.1.111:8000/info",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: 
            JSON.stringify({
                token: getToken(),
              }),
      }
    )

=======
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
>>>>>>> 1c4ed24793245e337b885f08cbfede8d2e1deeef
  let json = await response.json()

  return json
}
