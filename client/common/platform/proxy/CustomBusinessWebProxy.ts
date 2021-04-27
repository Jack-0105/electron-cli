import { ICustomBusinessProxy } from "../type";
import { BusinessElectronProxy } from "electron-proxy";

export default class CustomBusinessWebProxy
  extends BusinessElectronProxy
  implements ICustomBusinessProxy {}
