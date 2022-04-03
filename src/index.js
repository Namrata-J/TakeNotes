import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./contexts/note-context";
import { HeaderProvider } from "./contexts/header-context";

// Call make Server
makeServer();

ReactDOM.render(
  <StrictMode>
    <HeaderProvider>
      <NoteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NoteProvider>
    </HeaderProvider>
  </StrictMode>,
  document.getElementById("root")
);
