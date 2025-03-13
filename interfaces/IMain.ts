import IAccountUI from "@/interfaces/IAccountUI";
import { IModeSelected } from "@/interfaces/IModeSelected";

export default interface IMain {
    accountList: IAccountUI[],
    mode: IModeSelected
  }