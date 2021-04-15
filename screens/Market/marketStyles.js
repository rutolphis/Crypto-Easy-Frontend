import { Right } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  bottomBar: {
    position: "absolute",
    bottom: 35,
    flex: 1,
    flexDirection: "row",
  },

  spaceBetweenLeft: {
    marginLeft: 60,
  },
  spaceBetweenRight: {
    marginRight: 60,
  },

  bottomImgLeft: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  bottomImgRight: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  title: {
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 90,
    fontWeight: "bold",
    fontSize: 26,
    color: "#35424a",
    marginBottom: 6,
  },
})
export { styles }
