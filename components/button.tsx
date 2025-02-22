import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'; 

export default function Button(props) {
  console.log(props)
  return (
    <TouchableHighlight style={styles.background} underlayColor={'grey'} onPress={props.onPress}>
        {props.children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#B4BAB1',
    // boxShadow: "-5px -5px 5px grey",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 5,
  },
  text2: {
    backgroundColor: '#B4BAB1',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 6,
    flex: 1
  },
  image: {
    marginHorizontal: "default"
  }
})