import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Login from "../screens/Login/Login"
import Market from "../screens/Market/Market"

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Market: {
    screen: Market,
    navigationOptions: {
      header: null,
    },
  },
}

const loginStack = createStackNavigator(screens)

export default createAppContainer(loginStack)
