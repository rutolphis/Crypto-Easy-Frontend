import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Login from "../screens/Login/Login"
import Market from "../screens/Market/Market"
import Wallet from "../screens/Wallet/Wallet"
import CryptoDetail from "../screens/CryptoDetail/CryptoDetail"
import Buy from "../screens/Buy"

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Market: {
    screen: Market,
    navigationOptions: {
      headerShown: false,
    },
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      headerShown: false,
    },
  },
  CryptoDetail: {
    screen: CryptoDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  Buy: {
    screen: Buy,
    navigationOptions: {
      headerShown: false,
    },
  },
}

const loginStack = createStackNavigator(screens)

export default createAppContainer(loginStack)
