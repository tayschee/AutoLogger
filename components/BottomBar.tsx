import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayButton from '@/components/playButton';
import AddButton from './AddButton';
import {darkGrey} from "@/assets/styles/color.ts"


export default function BottomBar(props) {
  return (
    <View style={styles.bottomBar}>
        {props.children}
        {/* <View style={styles.bottomBarButton}>{props.children}</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "#31363F",
    flex: 0.125,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // alignItems: "center", //centrer horizontalement
    justifyContent: "center", //centrer verticalement enfant
    flexDirection: "row",
  },
})