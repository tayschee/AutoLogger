import React, { useState } from 'react'; 
import { View, StyleSheet, TouchableHighlight, Pressable, Image} from 'react-native';
import { styles } from '@/assets/styles/secondaryButtonStyle';
import IAccountUI from '@/interfaces/IAccountUI';


export default function DeleteButton({data, deleteFunction}) {
  const [modalVisible, setModalVisible] = useState(false);
  let modalVisibleSwitch = () => {setModalVisible(!modalVisible)}

  return (
    <Pressable style={styles.secondaryButton} underlayColor={'red'} onPress={() => deleteFunction(data.accountList.filter((item: IAccountUI) => item.selected === false))}>
      <Image resizeMethod='resize' resizeMode="contain" style={styles.trashLogo} source={require("@/assets/images/trash.png")}/>
    </Pressable>
  )
}