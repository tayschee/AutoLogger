import IAccountUI from '@/interfaces/IAccountUI';
import React, { useState } from 'react'; 
import { View, StyleSheet, Text, Pressable, TextInput, Image} from 'react-native';
import {styles} from "@/assets/styles/accountButton.ts"

export default function AccountForm({data, quitFunction, addFunction}) {
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const game = "AmourSucreNewGen"

  const defaultStyle = [
        //styles.background,
        //styles.margin,
        styles.border,
        // styles.color,
        //styles.noStateBorder
      ]

  return (
    <View style={styles2.centeredView}>
        <View style={styles2.modalView}>
            <Pressable style={styles2.closeButton} onPress={() => quitFunction()}>
              <Image source={require("@/assets/images/deleteButton.png")}/>
            </Pressable>
            <View>
              <Text style={styles2.title}>email/username</Text>
              <TextInput
              style={defaultStyle}
              autoCorrect={false}
              inputMode={"text"}
              secureTextEntry={false}
              onChangeText={onChangeUsernameOrEmail}
              value={usernameOrEmail}/>
            </View>

            <View style={styles2.margin}/>
            <View>
              <Text style={styles2.title}>password</Text>
              <TextInput
              style={defaultStyle}
              autoCorrect={false}
              inputMode={"text"}
              secureTextEntry={true}
              onChangeText={onChangePassword}
              value={password}/>
            </View>
            
            <View style={styles2.margin}/>
            <View style={styles2.margin}/>
            <View style={styles2.margin}/>
          
            
            <Pressable
                style={styles2.button}
                onPress={() => {
                  console.log(data)
                    const id = data.accountList.length > 0 ? data.accountList[data.accountList.length -1].id + 1: 0
                    const newElement: IAccountUI =  {id: id, game: game, usernameOrEmail: usernameOrEmail, password: password, selected: false, message: "Account add to the database", date: new Date(Date.now()).toString() }
                    data.accountList.push(newElement)
                    addFunction(data.accountList)
                    quitFunction()
                }}>
                <Text style={styles2.textStyle}>Add this account</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles2 = StyleSheet.create({
    circle: {
      // flex:0.5,
      // position: "relative",
      backgroundColor: "green",
      borderRadius: "50%",
      padding: 25,
      //width: "100%",
      //height: "100%",
      marginHorizontal: "auto",
      marginVertical: "auto"
      // marginBottom: "7.5%"
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundAttachment:"green"
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      paddingTop: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      height: 40,
      width: 100,
      borderWidth: 1,
      padding: 10,
      textAlign: 'left'
    },
    title: {
      marginBottom: 0,
      paddingBottom: 0

    },
    margin: 
    {
      marginBottom: 10
    },
    closeButton: {
      position: "absolute",
      // width: "100%",
      // maxWidth: "100%",
      // maxHeight: "100%",
      // aspectRatio: 1,
      top: 0,
      right: 0
    }
  })