import React, { Children } from 'react'; 
import { View, StyleSheet, Image, Pressable} from 'react-native';
import { mapAutoLog } from '@/constants/gameFunctionMap';
import IAutoLogResult from '@/interfaces/IAutoLogResult';
import {styles} from "@/assets/styles/mainButtonStyle"


export default function PlayButton({data, updateFunction}) {
  let play = async () => {
    for (let i = 0; i < dataList.length; i++) {
      const autoLogResult: Promise<IAutoLogResult> = mapAutoLog.get(data[i].game)!(dataList[i])
      autoLogResult.then((autoLogResult) => {
        dataList[i] = {...dataList[i], autoLogResult}
        updateFunction(...dataList)
      })
      .catch()
    }
    
  }

  return (
    // <View style={styles.backCircle}>
    <Pressable style={styles.frontCircle} onPressIn={play}>
      {/* <View style={styles.playLogo}/> */}
        <Image resizeMethod='resize' resizeMode="contain" style={styles.playLogo} source={require("@/assets/images/play2.png")}/>
    </Pressable>
    // </View>
  )
}