import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* State provider is a kind of datalayer whenever we want we can push the information in a datalayer and also can pull it from any component(when we sign in we push the user in the datalayer and can pull the user from datalayer when we need it). */}
    <StateProvider initialState={initialState}
      reducer={reducer}>
      <App />
     </StateProvider>
  </React.StrictMode>,
  rootElement
);

// if you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes up with some pitfalls.

serviceWorker.unregister();
