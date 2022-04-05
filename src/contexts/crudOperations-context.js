import React, { useReducer, useContext, createContext } from "react";
import { v4 as uuid } from "uuid";

const crudOperationsContext = createContext({ state: [], dispatch: () => {} });

const CrudOperationsProvider = ({ children }) => {

    const notesReducer = ( stateOfNotes, action ) => {
        switch(action.type){
            case "ADD_NOTE": 
                return [ ...stateOfNotes, { _id: uuid(), title: action.payload._title, description: action.payload._description, currDate: new Date(), canEdit: false, isPinned: false }]
            case "EDIT_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, canEdit: true} : currNote ) ]
            case "SAVE_NOTE":
                return [ ...stateOfNotes.map(currNote => currNote._id === action.payload._id? {...currNote, canEdit: false} : currNote ) ]
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
        }
    }

    const notesInitialObj = [];

    const [ stateOfNotes, dispatchOfNotes ] = useReducer( notesReducer, notesInitialObj );

    return <crudOperationsContext.Provider value={{ stateOfNotes, dispatchOfNotes }}>
        { children }
    </crudOperationsContext.Provider>
}

const useCrudOperations = () => useContext(crudOperationsContext);

export { useCrudOperations, CrudOperationsProvider };