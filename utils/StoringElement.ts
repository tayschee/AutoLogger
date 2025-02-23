import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: "storage",
  //path: `${USER_DIRECTORY}/storage`,
  //encryptionKey: 'hunter2',
  //mode: Mode.MULTI_PROCESS,
})

// export function saveAccount() {
//   console.log("save account2")
//   storage.set("username", "username1")
//   // storage.set("username", "username2")

//   console.log(storage.getString("storage"))
//   console.log("save account3")
// }

// async function getAllAccounts(username, password) {
//     try {
//         // Retrieve the credentials
//         const credentials = await Keychain.getGenericPassword();
//         if (credentials) {
//           console.log(
//             'Credentials successfully loaded for user ' + credentials.username
//           );
//         } else {
//           console.log('No credentials stored');
//         }
//       } catch (error) {
//         console.error("Failed to access Keychain", error);
//       }
    
//       // Reset the stored credentials
//       await Keychain.resetGenericPassword();
// };
