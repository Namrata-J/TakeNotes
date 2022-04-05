import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider } from "./contexts/header-context";
import { CrudOperationsProvider } from "./contexts/crudOperations-context";
import { TextBoxProvider } from "./contexts/textBox-context";

// Call make Server
makeServer();

ReactDOM.render(
  <StrictMode>
    <CrudOperationsProvider>
      <HeaderProvider>
        <TextBoxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TextBoxProvider>
      </HeaderProvider>
    </CrudOperationsProvider>
  </StrictMode>,
  document.getElementById("root")
);