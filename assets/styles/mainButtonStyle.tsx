import { StyleSheet } from 'react-native';
import {darkGrey, lightGrey, blue, red, white, black} from '@/constants/color.ts'


const circleSize = 125
export const styles = StyleSheet.create({
  frontCircle: {
    backgroundColor: blue,
    borderRadius: "50%",
    maxWidth: "100%",
    aspectRatio: 1, //permet de set la height en fonction de la width 
    width: circleSize,
    transform: [{ translateY: -circleSize/1.75 }],
    boxShadow: `0 9 10 ${darkGrey}, 0 15 0 0.5 ${lightGrey}`,
    justifyContent: "center", //centrer verticalement enfant
    alignItems: "center", //centrer horizontalement enfant,
  },
  playLogo: {
    //backgroundColor: red,
    //width: circleSize
    aspectRatio: 0.1,
    //maxWidth: "100%",
    //maxHeight: "100%",
    left: 5, //there is a problem i need to think how resolve
  },
})