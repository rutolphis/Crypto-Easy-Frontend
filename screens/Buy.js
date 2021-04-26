import VirtualKeyboard from "react-native-virtual-keyboard"
import { View, TextInput, StyleSheet } from "react-native"
import React from "react"
import { NavigationBar } from "../components/Footer"

export const Buy = ({ navigation }) => {
  let state = { num: "" }
  function changeText(newNum) {
    state.setState({ num: newNum })
  }
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <VirtualKeyboard
          color="white"
          pressMode="string"
          onPress={(val) => this.changeText(val)}
        />
      </View>
    </View>
  )
}
export default Buy

// class Example extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: "",
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Text>{this.state.text}</Text>
//         <VirtualKeyboard
//           color="white"
//           pressMode="string"
//           onPress={(val) => this.changeText(val)}
//         />
//       </View>
//     )
//   }

//   changeText(newText) {
//     this.setState({ text: newText })
//   }
// }

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
