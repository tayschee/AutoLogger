import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayButton from '@/components/playButton';
import AddButton from './AddButton';
import {darkGrey} from "@/constants/color.ts"


export default function BottomBar(props) {
  return (
    <View style={styles.bottomBar}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    width: "100%",
    height: "10%",
    bottom: 0,
    backgroundColor: "#31363F",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    // alignItems: "center", //centrer horizontalement
    justifyContent: "center", //centrer verticalement enfant
    flexDirection: "row",
  }
})