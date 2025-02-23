import React, { useState } from 'react'; 
import { View, StyleSheet, Text, Pressable, TextInput, Image} from 'react-native'; 
import { saveAccount } from '@/utils/StoringElement';

export default function AccountForm({quitFunction}) {
  //console.log(props)
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState("Test");


  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Pressable style={styles.closeButton} onPress={() => quitFunction()}>
              <Image source={require("@/assets/images/deleteButton.png")}/>
            </Pressable>
            <Text style={styles.title}>email or username</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeUsernameOrEmail}
            value={usernameOrEmail}/>

            <View style={styles.margin}/>

            <Text style={styles.title}>password</Text>
            <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={onChangeUsernameOrEmail}
            value={usernameOrEmail}/>
            
            <View style={styles.margin}/>
            
            <Pressable
                style={styles.button}
                onPress={() => saveAccount()}>
                <Text style={styles.textStyle}>Add this account</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
      alignItems: 'center',
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
      position: "relative",
      top: 0,
      right: 0
    }
  })