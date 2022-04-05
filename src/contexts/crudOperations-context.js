import React, { useState, useReducer, useContext, createContext } from "react";
import { v4 as uuid } from "uuid";

const crudOperationsContext = createContext({ state: [], dispatch: () => {} });

const CrudOperationsProvider = ({ children }) => {

    const notesReducer = ( stateOfNotes, action ) => {
        switch(action.type){
            case "ADD_NOTE": 
                return [ ...stateOfNotes, { _id: uuid(), title: action.payload._title, description: action.payload._description, currDate: new Date(), canEdit: false, isPinned: false, bgColor: "white", colorPalette: false, labelInput: false, label: "" }]
            case "EDIT_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, canEdit: true} : currNote ) ]
            case "SAVE_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, canEdit: false, colorPalette: false, labelInput: false} : currNote ) ]
            case "UPDATE_NOTE_TITLE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id? {...currNote, title: action.payload.value} : currNote ) ]
            case "UPDATE_NOTE_DESCRIPTION":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id? {...currNote, description: action.payload.value} : currNote ) ]
            case "DELETE_NOTE":
                return [ ...stateOfNotes.filter(currNote => currNote._id !== action.payload._id) ]
            case "PIN_THE_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, isPinned: true} : currNote ) ]
            case "UNPIN_THE_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, isPinned: false} : currNote ) ]
            case "COLOR_PALETTE_DISPLAY":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, colorPalette: !currNote.colorPalette, labelInput: false} : currNote ) ]
            case "NOTE_BACKGROUND_COLOR":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id? {...currNote, bgColor: action.payload.bgColor} : currNote ) ]
            case "LABEL_INPUT_DISPLAY":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, colorPalette: false, labelInput: !currNote.labelInput} : currNote ) ]
            case "ADD_LABEL":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id? {...currNote, labelInput: false, label: action.payload.label} : currNote )]
        }
    }

    const getTheLabel = (e) => {
         setLabelInput(e.target.value)
    }

    const notesInitialObj = [];

    const [ stateOfNotes, dispatchOfNotes ] = useReducer( notesReducer, notesInitialObj );

    const [ labelInput, setLabelInput ] = useState("");

    return <crudOperationsContext.Provider value={{ stateOfNotes, dispatchOfNotes, labelInput, setLabelInput, getTheLabel }}>
        { children }
    </crudOperationsContext.Provider>
}

const useCrudOperations = () => useContext(crudOperationsContext);

export { useCrudOperations, CrudOperationsProvider };