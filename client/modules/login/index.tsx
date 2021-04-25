import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page";

ReactDOM.render(<Page />, document.getElementById("root"));

if ((module as any).hot) {
  (module as any).hot.accept();
}
