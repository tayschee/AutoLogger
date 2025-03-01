import LogList from '@/components/logList';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import TextButton from '@/components/textButton';
import BottomBar from '@/components/BottomBar'
import PlayButton from '@/components/playButton';
import AddButton from '@/components/AddButton';
import DeleteButton from '@/components/DeleteButton';

import Data from '@/utils/StoringElement';
import React, { useState } from 'react';


export default function Main() {
  const [data, setData] = useState(new Data())
  
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          // barStyle={statusBarStyle}
          hidden={false}
          />
      <View style={styles.list}>
        <LogList data={data}/>
      </View>
      <BottomBar>
        <PlayButton style={styles.runButton} data={data} updateFunction={(index, partialInfo) => {setData(() => {data.update(index, partialInfo); return data.copy();})}}/>
        <AddButton style={styles.addButton}
                  addFunction={(game, usernameOrEmail, password) =>
          setData(() => {data.set(game, usernameOrEmail, password); return data.copy();})}/>
        <DeleteButton style={styles.deleteButton}
                  deleteFunction={() =>
          setData(() => {data.clear(); return data.copy();})}/>
      </BottomBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flexDirection: "column",
    flex:1
  },
  row: {
    flexDirection: "row",
    flex:1
  },
  list: {
    flex: 0.9,
  },
  bottomBar: {
    flex: 0.1,
  },
  buttonBg: {
    flex: 0.5,
    backgroundColor: "blue"
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
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
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: "50%",
    padding: 25,
    marginVertical: "auto",
    marginHorizontal: 200
  }
});
