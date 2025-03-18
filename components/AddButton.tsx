import React, { useState } from 'react'; 
import { Image, Pressable, Modal, Text, Alert, TextInput} from 'react-native';
import AccountForm from './AccountForm';
import {styles} from "@/assets/styles/secondaryButtonStyle"


export default function AddButton({data, addFunction}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState("Test");
  let modalVisibleSwitch = () => {setModalVisible(!modalVisible)}

  return (
    <Pressable style={styles.secondaryButton} onPress={modalVisibleSwitch}>
      <Image resizeMethod='scale' resizeMode="contain" style={styles.plusLogo} source={require("@/assets/images/plus.png")}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          modalVisibleSwitch()
        }}>
          <AccountForm
            data={data}
            quitFunction={modalVisibleSwitch}
            addFunction={addFunction}
          />
      </Modal>
    </Pressable>
  )
}

//  <Pressable style={styles.frontCircle} onPress={play}>
//         <Image resizeMethod='resize' resizeMode="contain" style={styles.playLogo} source={require("@/assets/images/play2.png")}/>