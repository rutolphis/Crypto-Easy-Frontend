import React, { useState } from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import { Form, Item, Label, Input, Button } from "native-base"
import { styles } from "./loginStyles"
import { getToken } from "../../token/Token"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginResult, setLoginResult] = useState("")
  const [css, setCss] = useState("none")

  const handleSignIn = () => {
    fetch("http://192.168.1.111:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.response == "Wrong password") {
          console.log("zle heslo")
          setLoginResult("Wrong password! Please try again.")
          setCss("flex")
        } else if (json.response == "Wrong email") {
          console.log("zle email")
          setLoginResult("Wrong email! Please try again.")
          setCss("flex")
        } else {
          getToken(json.response)
          navigation.navigate("Market")
        }
      })
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Image source={require("../../images/logo.png")} style={styles.image} />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.entryMessage}>
          Hi there! Nice to see you again.
        </Text>
        <Form>
          <Item stackedLabel>
            <Label style={styles.loginInput}>Email</Label>
            <Input
              placeholder="johndoe@gmail.com"
              defaultValue="test@test.co"
              onChangeText={(val) => {
                setEmail(val)
                setCss("none")
              }}
            />
          </Item>
          <Item stackedLabel last>
            <Label style={styles.loginInput}>Password</Label>
            <Input
              secureTextEntry={true}
              placeholder="••••••••"
              defaultValue="tes"
              onChangeText={(val) => {
                setPassword(val)
                setCss("none")
              }}
            />
          </Item>
          <Button block light style={styles.button} onPress={handleSignIn}>
            <Text style={styles.button}>Sign In</Text>
          </Button>
        </Form>
        <Text
          style={{ display: css, color: "red", marginBottom: 10, fontSize: 16 }}
        >
          {loginResult}
        </Text>
        <Text style={styles.signUpText}>Don't have an account yet ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUp}>Sign Ups</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
