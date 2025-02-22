import React from 'react'; 
import { Text, StyleSheet } from 'react-native';
import Button from '@/components/button';

export default function TextButton(props) {
  return (
      <Button onPress={() => console.log(props)}>
          <Text>{props.gameName}: {props.emailOrUsername}</Text>
      </Button>
  )
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: "auto",
  }
})