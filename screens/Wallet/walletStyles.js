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
})
export { styles }
