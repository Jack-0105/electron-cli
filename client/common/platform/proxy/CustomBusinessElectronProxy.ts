import { ICustomBusinessProxy } from "../type";
import { BusinessElectronProxy } from "electron-proxy";

export default class CustomBusinessElectronProxy
  extends BusinessElectronProxy
  implements ICustomBusinessProxy {}
