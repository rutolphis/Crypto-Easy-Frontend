import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "../screens/Market/marketStyles"

const NavigationBar = () => {

    return (
          <View style={styles.bottomBar}>
            <Image
              source={require("../images/market.png")}
              style={styles.bottomImgLeft}
            />
            <Image
              source={require("../images/wallet.png")}
              style={styles.bottomImgRight}
            />
          </View>
    )
  }

  export default NavigationBar;