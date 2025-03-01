import React, { Children } from 'react'; 
import { View, StyleSheet, TouchableHighlight, Pressable} from 'react-native';
import { mapAutoLog } from '@/constants/gameFunctionMap';
import IAutoLogResult from '@/interfaces/IAutoLogResult';

export default function PlayButton({style, data, updateFunction}) {
  let dataList = data.get();
  let play = async () => {
    for (let i = 0; i < dataList.length; i++) {
      console.log("hello")
      const autoLogResult: Promise<IAutoLogResult> = mapAutoLog.get(dataList[i].game)(dataList[i])
      autoLogResult.then((autoLogResult) => {
        console.log(autoLogResult)
        updateFunction(i, autoLogResult)
      })
      .catch()
    }
    
  }

  return (
    <Pressable style={style} onPressIn={play}></Pressable>
  )
}

const styles = StyleSheet.create({
  circle: {
    // flex:0.5,
    // position: "relative",
    backgroundColor: "black",
    borderRadius: "50%",
    padding: 35,
    //width: "100%",
    //height: "100%",
    marginHorizontal: "auto",
    marginVertical: "auto"
    // marginBottom: "7.5%"
  }
})