import IAutoLogInfo from '@/interfaces/IAccount';
import { MMKV } from 'react-native-mmkv'
import React, { useState } from 'react';

// export default class Data {
//   private static storage = new MMKV();
//   private info: Array<IAutoLogInfo>;

//   public constructor(info: IAutoLogInfo[] | undefined = undefined) {
//     this.info = this.getFromStorage()
//   }

//   public copy(): Data {
//     return new Data(this.get())
//   }

//   private getFromStorage(): Array<IAutoLogInfo> {
//     if (Data.storage.contains("data")) {
//       let jsonString: String = Data.storage.getString("data")
//       return JSON.parse(jsonString)
//     }
//     else {
//       return []
//     }
//   }

//   public get(): Array<IAutoLogInfo> {
//     return this.info
//   }

//   public set(game: String, usernameOrEmail: String, password: String): void {
//     let value: IAutoLogInfo = {
//       id: this.info.length,
//       game: game,
//       usernameOrEmail: usernameOrEmail,
//       password: password,
//       succeed: undefined,
//       message: "Any connection attempt",
//       date: undefined
//     }
//     this.info.push(value);

//     Data.storage.set("data", JSON.stringify(this.info))
//   }

//   public update(index: number, partialInfo: Partial<IAutoLogInfo>): void {
//     console.log("partialinfo: ", partialInfo)
//     console.log("info:", this.info)
//     this.info[index] = {
//       ...this.info[index],
//       ...partialInfo
//     }
//     Data.storage.set("data", JSON.stringify(this.info))
//   }

//   public delete(index: number) {
//     this.info.remove(index)
//     Data.storage.set("data", JSON.stringify(this.info))
//   }

//   public clear() {
//     this.info = []
//     Data.storage.clearAll()
//   }
// }

// export class Storage {
//   private static storage = new MMKV();

//   constructor(storageString: string)
//   {
//     super()
//     this.state = {
//       storage: JSON.parse(storage.getString(storageString) ?? "[]")
//     }
//     this.storageString = storageString
//   }

//   setStorage(array: IAutoLogInfo[])
//   {
//     this.setState = ({...this.state, storage: array})
//     storage.set("data", JSON.stringify(array))
//   }
// }

// const storage = new MMKV();
// export function useStateStorage(storageString: string): [[IAutoLogInfo], any] {
//   window.storage = new MMKV();
//   console.log(storage.getString(storageString))
//   const [state, setState]: [[IAutoLogInfo], any] = useState(JSON.parse(storage.getString(storageString) ?? "[]"))
  
//   const setStateStorage = (array: IAutoLogInfo[]) => {
//     setState(array)
//     storage.set("data", JSON.stringify(array))
//   }

//   return [state, setStateStorage]
// }