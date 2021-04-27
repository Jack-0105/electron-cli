import { BrowserWindow, WebPreferences } from "electron";

export interface IOption {
  title?: string;
  x?: number;
  y?: number;
  fullscreen?: boolean;
  width?: number;
  height?: number;
  center?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
  parent?: BrowserWindow;
  modal?: boolean;
  webPreferences?: WebPreferences;
}

export default class Window {
  private _innerWindow: BrowserWindow;
  constructor(props: IOption = {}) {
    this._innerWindow = new BrowserWindow(props);
  }

  loadURL(url: string) {
    this._innerWindow.loadURL(url);
  }

  openDevTools() {
    this._innerWindow.webContents.openDevTools();
  }
}
