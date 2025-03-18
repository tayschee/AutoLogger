import React, { Children } from 'react'; 
import { View, StyleSheet, Image, Pressable} from 'react-native';
import { mapAutoLog } from '@/constants/gameFunctionMap';
import IAutoLogResult from '@/interfaces/IAutoLogResult';
import {styles} from "@/assets/styles/mainButtonStyle";
import IAmourSucreNewGenInfo from '@/utils/games/amourSucreNewGen/IAmourSucreNewGenInfo';


export default function PlayButton({accountList, updateFunction}) {
  let play = () => {
    const newArray = [...accountList]
    for (let i = 0; i < accountList.length; i++) {
      mapAutoLog.get(accountList[i].game)!(accountList[i]).then((autoLogResult: IAutoLogResult) => { 
        newArray[i] = {...newArray[i], ...autoLogResult}
        updateFunction([...newArray])
      })
      .catch(() => null)
    }

  }

  return (
    <Pressable style={styles.frontCircle} onPress={play}>
        <Image resizeMethod='resize' resizeMode="contain" style={styles.playLogo} source={require("@/assets/images/play.png")}/>
    </Pressable>
  )
}