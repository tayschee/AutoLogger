import IAutoLogInfo from '@/interfaces/IAautoLogInfo';
import { MMKV } from 'react-native-mmkv'

export default class Data {
  private static storage = new MMKV();
  private info: IAutoLogInfo[];

  public constructor(info: IAutoLogInfo[] | undefined = undefined) {
    this.info = this.getFromStorage()
  }

  public copy(): Data {
    return new Data(this.get())
  }

  private getFromStorage(): IAutoLogInfo[] {
    if (Data.storage.contains("data")) {
      let jsonString: String = Data.storage.getString("data")
      return JSON.parse(jsonString)
    }
    else {
      return []
    }
  }

  public get(): IAutoLogInfo[] {
    return this.info
  }

  public set(game: String, usernameOrEmail: String, password: String): void {
    let value: IAutoLogInfo = {
      id: this.info.length,
      game: game,
      usernameOrEmail: usernameOrEmail,
      password: password,
      succeed: undefined,
      message: "Any connection attempt",
      date: undefined
    }
    this.info.push(value);

    Data.storage.set("data", JSON.stringify(this.info))
  }

  public update(index: number, partialInfo: Partial<IAutoLogInfo>): void {
    console.log("partialinfo: ", partialInfo)
    console.log("info:", this.info)
    this.info[index] = {
      ...this.info[index],
      ...partialInfo
    }
    console.log(this.info)
    Data.storage.set("data", JSON.stringify(this.info))
    console.log("here:", this.get())
  }

  public clear() {
    this.info = []
    Data.storage.clearAll()
  }
}