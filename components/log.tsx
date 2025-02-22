import React from 'react'; 
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import Button from '@/components/button'

export default function Log({gameName, emailOrUsername}) { 
  return (
    <Button>
      <Text>{item.gameName}: {item.emailOrUsername}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
  },
  text1: {
    backgroundColor: '#B4BAB1',
    borderRadius: 15,
    padding: 20,
    marginStart: 6,
    flex: 8
  },
  text2: {
    backgroundColor: '#B4BAB1',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 6,
    flex: 1
  },
  image: {
    marginHorizontal: "default",
  }
})