// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import {Provider} from 'react-redux'
// // import {store} from './redux/store.js'
// import {Store} from './Store.js'

// createRoot(document.getElementById('root')).render(
  
//   <Provider store={Store}>
//     <App />
//   </Provider>
  
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "./Store.js";
import store from "./Store";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);


