import React from 'react'; 
import { Text, View, StyleSheet, SafeAreaView, Image, Button, TouchableHighlight, TouchableNativeFeedback } from 'react-native'; 

export default function Log({gameName, emailOrUsername}) { 
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text1}>{gameName}: {emailOrUsername}</Text>
      <TouchableNativeFeedback>
        <View style={styles.text2}>
          <Image style={styles.image} source={require("@/assets/images/play.png")}/>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
  },
  text1: {
    backgroundColor: '#B4BAB1',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 20,
    marginStart: 6,
    flex: 8
  },
  text2: {
    backgroundColor: '#B4BAB1',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20,
    marginHorizontal: 6,
    flex: 1
  },
  image: {
    marginHorizontal: "auto",
  }

})