import React from "react"
import { View, Text } from "react-native"
import { Form, Content, Item, Label, Input, Button } from "native-base"
import { styles } from "./marketStyles"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { token } from "../../token/Token"

const Tab = createBottomTabNavigator()

export default function Market({ token }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Text style={styles.title}>Market</Text>
        <Tab.Navigator>
          <Tab.Screen name="Home" />
          <Tab.Screen name="Settings" />
        </Tab.Navigator>
      </View>
    </View>
  )
}
