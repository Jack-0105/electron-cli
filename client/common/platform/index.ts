import { Platform } from "electron-proxy";
import CustomBusinessElectronProxy from './proxy/CustomBusinessElectronProxy';
import CustomBusinessWebProxy from './proxy/CustomBusinessWebProxy';
import { ICustomBusinessProxy } from "./type";

export default new Platform<ICustomBusinessProxy>();

export {
  CustomBusinessElectronProxy,
  CustomBusinessWebProxy
}