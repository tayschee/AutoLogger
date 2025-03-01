import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayButton from '@/components/playButton';
import AddButton from './AddButton';

export default function BottomBar(props) {
  return (
    <View style={styles.bottomBar}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "#61dafb",
    flexDirection: "row",
    flex:0.1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    //gridAutoRows: "2"
  }
})