import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page";
import platform, {
  CustomBusinessElectronProxy,
  CustomBusinessWebProxy,
} from "@common/platform";

const render = ()=>{
  ReactDOM.render(<Page />, document.getElementById("root"));
}

if ((module as any).hot) {
  (module as any).hot.accept();
}

platform
  .init(new CustomBusinessElectronProxy(), new CustomBusinessWebProxy())
  .then(() => render());

window['platrormS'] = platform;
