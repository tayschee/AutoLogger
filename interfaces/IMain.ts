import IAccountUI from "@/interfaces/IAccountUI";
import { ClickMode } from "@/interfaces/ClickMode";

export default interface IMain {
    accountList: IAccountUI[],
    mode: ClickMode
  }