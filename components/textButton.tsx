import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Button from '@/components/button';



export default function TextButton(props) {

  const colorChoice = () =>  { return props.item.succeed === true ? styles.succeedBackground :
                                        props.item.succeed === false ? styles.unsucceedBackground :
                                        styles.background }
  const [logVisible, setLogVisible] = useState(false)
  const switchLogVisible = () => {setLogVisible(!logVisible)}

  const date = new Date(props.item.date)
  console.log(date)

  return (
    <View>
      <TouchableHighlight style={colorChoice()} underlayColor={'grey'} onPress={switchLogVisible}>
          <Text>{props.item.game}: {props.item.usernameOrEmail}</Text>
      </TouchableHighlight>
      {
        logVisible ?
        <TouchableHighlight style={styles.logBackground} underlayColor={'grey'} onPress={props.onPress}>
          <Text>{Number.isNaN(date.valueOf()) ? "": date.toLocaleTimeString("Fr-fr")} {props.item.message}</Text>
        </TouchableHighlight>
        :false
      }
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: "auto",
  },
  background: {
    backgroundColor: '#B4BAB1',
    // boxShadow: "-5px -5px 5px grey",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 5,
    borderTopColor: '#B4BAB1'
  },
  succeedBackground: {
    backgroundColor: "#61dafb",
    // boxShadow: "-5px -5px 5px grey",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 5,
  },
  unsucceedBackground: {
    backgroundColor: "#CA3C66",
    // boxShadow: "-5px -5px 5px grey",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 5,
  },
  logBackground: {
    backgroundColor: '#B4BAB1',
    // boxShadow: "-5px -5px 5px grey",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: -15,
    padding: 20,
    marginHorizontal: 5,
  },
})