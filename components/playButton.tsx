import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, Pressable} from 'react-native'; 

export default function PlayButton({style}) {
  
  let play = () => {console.log("playButton")}

  return (
    <Pressable style={style} onPressIn={play}></Pressable>
  )
}

const styles = StyleSheet.create({
  circle: {
    // flex:0.5,
    // position: "relative",
    backgroundColor: "black",
    borderRadius: "50%",
    padding: 35,
    //width: "100%",
    //height: "100%",
    marginHorizontal: "auto",
    marginVertical: "auto"
    // marginBottom: "7.5%"
  }
})