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
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 35,
  },

  bottomImgLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 50,
    width: 40,
    height: 40,
  },

  bottomImgRight: {
    width: 40,
    height: 40,
  },
  title: {
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 26,
    color: "#35424a",
    marginBottom: 6,
  },
})
export { styles }
