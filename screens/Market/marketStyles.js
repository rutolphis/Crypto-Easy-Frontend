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
    position: 'absolute',
    bottom: 35,
    flex:1,
    flexDirection: 'row',

  },

  bottomImgLeft: {
    flex:1,
    marginLeft: 10,
    height: 40,
    width: 40,
    resizeMode: 'contain'

  },

  bottomImgRight: {
    flex: 1,
    marginRight: 10,
    height: 40,
    width: 40,
    resizeMode: 'contain'
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
