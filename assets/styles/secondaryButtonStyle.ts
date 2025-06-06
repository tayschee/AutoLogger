import { StyleSheet } from 'react-native';
import {darkGrey, lightGrey, blue, red, white, black} from '@/constants/color.ts'


const circleSize = 50
export const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: white,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: darkGrey,
    maxWidth: "100%",
    aspectRatio: 1, //permet de set la height en fonction de la width 
    width: circleSize,
    // marginVertical: "auto",
    transform: [{ translateY: -circleSize/1.75 }],
    //boxShadow: `inset 0 -5 3 15 ${lightGrey}`,
    justifyContent: "center", //centrer verticalement enfant
    alignItems: "center", //centrer horizontalement enfant
    position: "relative"
  },
  plusLogo: {
    aspectRatio: 0.075
  },
  trashLogo: {
    aspectRatio: 0.05,
  },
})