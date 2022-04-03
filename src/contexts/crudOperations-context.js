import React, { useReducer, useContext, createContext } from "react";
import { v4 as uuid } from "uuid";

const crudOperationsContext = createContext({ state: [], dispatch: () => {} });

const CrudOperationsProvider = ({ children }) => {

    const notesReducer = ( stateOfNotes, action ) => {
        switch(action.type){
            case "ADD_NOTE" : 
            console.log(action.payload._title, action.payload._description )
                  return [ ...stateOfNotes, { _id: uuid(), title: action.payload._title, description: action.payload._description }]
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