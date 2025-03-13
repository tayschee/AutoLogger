import { StyleSheet } from 'react-native';
import {darkGrey, lightGrey, blue, red, white, black} from '@/assets/styles/color'


const circleSize = 50
export const styles = StyleSheet.create({
  background: {
    // boxShadow: "-5px -5px 5px grey",
    borderRadius: 15,
  },
  color: {
    backgroundColor: white,
  },
  selectedColor: {
    backgroundColor: "grey",
  },
  transparency: {
    backgroundColor: `${white}00`,
  },
  margin: {
    marginHorizontal: 10
  },
  padding:  {
    padding: 19
  },
  succeedBorder: {
    borderColor: blue,
    boxShadow: `0 0 4 1 ${blue}90, 0 0 4 2 ${blue}37`
  },
  unsucceedBorder: {
    borderColor: red,
    boxShadow: `0 0 4 1 ${red}90, 0 0 4 2 ${red}37`
  },
  noStateBorder: {
    borderColor: lightGrey,
    boxShadow: `0 0 4 1 ${lightGrey}90, 0 0 4 2 ${lightGrey}37`
  },
  bottomBorder: {
    borderBottomWidth: 1
  },
  border: {
    borderWidth: 1
  }
})