import React, { useState } from "react"
import { StyleSheet, View, Image, Text, TextInput } from "react-native"
import { Form, Content, Item, Label, Input, Button } from "native-base"
import { token } from "../token/Token"
import Market from "./Market"

const Login = ({ token }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginResult, setLoginResult] = useState("")
  const [css, setCss] = useState("none")

  const handleSignIn = () => {
    fetch("http://192.168.191.118:8000/login", {
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
          token = json.response
          console.log(token)
          return <Market />
        }
      })
  }

  return (
    <View style={styles.container}>
      <Image source={require("../images/logo.png")} style={styles.image} />
      <Text style={styles.signIn}>Sign In</Text>
      <Text style={styles.entryMessage}>Hi there! Nice to see you again.</Text>
      <Form>
        <Item stackedLabel>
          <Label style={styles.loginInput}>Email</Label>
          <Input
            placeholder="johndoe@gmail.com"
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
            placeholder="•••••••••"
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
      <Text style={styles.signUp}>Sign Up</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  image: {
    marginTop: 100,
    marginBottom: 25,
    width: 300,
    height: 100,
    resizeMode: "contain",
  },

  signIn: {
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
