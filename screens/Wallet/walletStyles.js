import { Row } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  title: {
    marginLeft: 17,
    marginRight: 200,
    color: "#35424a",
    marginTop: 90,
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    marginLeft: 17,
    marginRight: 220,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 24,
  },
  plus: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 115,
    marginRight: 30,
  },
  plusLogo: {
    height: 30,
    width: 30,
  },
  containerCryptoDetail: {
    flexDirection: "row",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    marginBottom: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "#d6d6d6",
  },
  cryptoDetailText: {
    color: "#35424a",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 17,
  },
  cryptoDetailButton: {
    backgroundColor: "#0c6cf5",
    color: "white",
    fontWeight: "bold",
    width: 290,
    textAlign: "center",
    margin: 20,
    fontSize: 17,
    borderRadius: 7,
    alignSelf: "center",
  },
  cryptoDetailPrice: {
    marginLeft: 25,
    alignSelf: "flex-start",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
})
export { styles }
