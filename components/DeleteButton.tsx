import React, { useState } from 'react'; 
import { View, StyleSheet, TouchableHighlight, Pressable, Image} from 'react-native';
import { styles } from '@/assets/styles/secondaryButtonStyle';
import IAccountUI from '@/interfaces/IAccountUI';


export default function DeleteButton({style, data, deleteFunction}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState("Test");
  let modalVisibleSwitch = () => {setModalVisible(!modalVisible)}

  return (
    <Pressable style={styles.secondaryButton} underlayColor={'red'} onPress={() => deleteFunction(data.accountList.filter((item: IAccountUI) => item.selected === false))}>
      <Image resizeMethod='resize' resizeMode="contain" style={styles.logo} source={require("@/assets/images/trash.png")}/>
    </Pressable>
  )
}

// const styles = StyleSheet.create({
//   circle: {
//     // flex:0.5,
//     // position: "relative",
//     backgroundColor: "green",
//     borderRadius: "50%",
//     padding: 25,
//     //width: "100%",
//     //height: "100%",
//     marginHorizontal: "auto",
//     marginVertical: "auto"
//     // marginBottom: "7.5%"
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// })