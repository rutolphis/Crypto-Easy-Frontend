import React, { useState } from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { Form, Item, Label, Input, Button } from "native-base"
import { getToken } from "../../token/Token"

export default function Register({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [cardId, setCardId] = useState("")
  const [street, setStreet] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [city, setCity] = useState("")
  const [photo, setPhoto] = useState("")
  const [debetCard, setDebetCard] = useState("")
  
 
  const handleSignUp = () => {
    fetch("http://192.168.1.111:8000/register", {
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
        
        } else if (json.response == "Wrong email") {
          console.log("zle email")
          setLoginResult("Wrong email! Please try again.")
        } else {
          getToken(json.response)
          navigation.navigate("Market")
        }
      })
  }

  return (
    <View style={styles.containerMain}>
        <Text style={styles.title}>Registration</Text>
      <View style={styles.container}>
          <Text style={styles.field}>
              Email:
          </Text>
          <View style = {{ width:200 , height: 40}}>
            <Input style={styles.textInput}
              placeholder="johndoe@gmail.com"
              onChangeText={(val) => {
                setEmail(val)
              }}
            />
            </View>
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Password:
          </Text>
          <View style = {{ width:200 , height: 40}}>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setPassword(val)
              }}
            />
            </View>
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Firstname:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setFirstname(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Lastname:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setLastname(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Card ID:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setCardId(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Street:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setStreet(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Postal Code:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setPostalCode(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              City:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setCity(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Photo:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setPhoto(val)
              }}
            />
          </View>
          <View style={styles.container}>
          <Text style={styles.field}>
              Debet Card Number:
          </Text>
            <Input
            style={styles.textInput}
              placeholder="xxxxxx"
              onChangeText={(val) => {
                setDebetCard(val)
              }}
            />
          </View>

          <Button style={styles.button}>
              <Text style={styles.button}>Sign Up</Text>
          </Button>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      color: "#0c6cf5",
      flexDirection: 'row',
    },
    containerMain: {
      flex: 1,
      backgroundColor: "#fff",
      fontWeight: "bold",
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: "#0c6cf5",
        fontWeight: 'bold'
    },
    field:{
        color: "#35424a",
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 20,
        marginLeft: 15
    },

    textInput: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 2,
        textAlign: 'center',
        
    },
    button: {
        backgroundColor: "#0c6cf5",
        color: "white",
        fontWeight: "bold",
        width: 290,
        textAlign: "center",
        margin: 20,
        fontSize: 17,
        borderRadius: 7,
      },

  })