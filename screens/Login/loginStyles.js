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

  entryMessage: {
    textAlign: "left",
    alignSelf: "stretch",
    marginLeft: 16,
    marginBottom: 6,
    color: "#989eb1",
  },

  loginInput: {
    color: "#3d8af7",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#0c6cf5",
    color: "white",
    fontWeight: "bold",
    width: 290,
    textAlign: "center",
    margin: 20,
    fontSize: 17,
  },

  signUpText: {
    color: "#989eb1",
    fontSize: 16,
  },

  signUp: {
    color: "#0c6cf5",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export { styles }
