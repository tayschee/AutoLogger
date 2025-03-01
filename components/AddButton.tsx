import React, { useState } from 'react'; 
import { View, StyleSheet, TouchableHighlight, Pressable, Modal, Text, Alert, TextInput} from 'react-native';
import AccountForm from './AccountForm';


export default function AddButton({style, addFunction}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState("Test");
  let modalVisibleSwitch = () => {setModalVisible(!modalVisible)}

  return (
    <Pressable style={style} underlayColor={'grey'} onPress={modalVisibleSwitch}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            modalVisibleSwitch()
          }}>
            <AccountForm
              quitFunction={modalVisibleSwitch}
              addFunction={addFunction}
            />
        </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  circle: {
    // flex:0.5,
    // position: "relative",
    backgroundColor: "green",
    borderRadius: "50%",
    padding: 25,
    //width: "100%",
    //height: "100%",
    marginHorizontal: "auto",
    marginVertical: "auto"
    // marginBottom: "7.5%"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})