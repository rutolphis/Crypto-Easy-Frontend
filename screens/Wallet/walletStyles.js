import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
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
  image: {
    marginTop: 20,
    marginBottom: 25,
    width: 300,
    height: 100,
    resizeMode: "contain",
  },

  title: {
    textAlign: "left",
    alignSelf: "stretch",
    marginLeft: 17,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 26,
    color: "#35424a",
    marginBottom: 6,
  },
})
export { styles }
