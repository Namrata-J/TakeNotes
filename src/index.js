import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider } from "./contexts/header-context";
import { CrudOperationsProvider } from "./contexts/crudOperations-context";
import { TextBoxProvider } from "./contexts/textBox-context";
import { FilterAndSortProvider } from "./contexts/filterAndSortContext";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CrudOperationsProvider>
          <FilterAndSortProvider>
            <HeaderProvider>
              <TextBoxProvider>
                <App />
              </TextBoxProvider>
            </HeaderProvider>
          </FilterAndSortProvider>
        </CrudOperationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);