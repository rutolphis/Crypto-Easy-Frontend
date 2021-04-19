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
  
    let json = await response.json()
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
>>>>>>> c2e94d194ea878d327f641ef61db537740e695d0

  let json = await response.json()

  return json
}
