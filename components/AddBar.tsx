import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayButton from '@/components/playButton';
import AddButton from './AddButton';

export default function Button(props) {
  console.log(props)
  return (
    <View style={styles.bottomBar}>
        <PlayButton style={styles.runButton}/>
        <AddButton style={styles.addButton}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "#61dafb",
    flexDirection: "row",
    flex:1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    //gridAutoRows: "2"
  },
  runButton: {
    backgroundColor: "black",
    borderRadius: "50%",
    padding: 35,
    marginVertical: "auto"
  },
  addButton: {
    backgroundColor: "grey",
    borderRadius: "50%",
    padding: 25,
    marginVertical: "auto",
  }
})