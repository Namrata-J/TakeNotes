import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./contexts/note-context";
import { HeaderProvider } from "./contexts/header-context";
import { CrudOperationsProvider } from "./contexts/crudOperations-context";
import { CreateNotesProvider } from "./contexts/createNotes-context";

// Call make Server
makeServer();

ReactDOM.render(
  <StrictMode>
    <CrudOperationsProvider>
      <HeaderProvider>
        <CreateNotesProvider>
          <NoteProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </NoteProvider>
        </CreateNotesProvider>
      </HeaderProvider>
    </CrudOperationsProvider>
  </StrictMode>,
  document.getElementById("root")
);
