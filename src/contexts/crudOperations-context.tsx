import { notesReducer } from "../reducers/";
import { useState, useReducer, useContext, createContext } from "react";
import { childrenProp, eventChange, crudOperationContextProps } from "./contextFiles.types";

const defaultCrudContextValue = {
    stateOfNotes: [],
    dispatchOfNotes: () => { },
    labelInput: "",
    setLabelInput: () => { },
    getTheLabel: () => { }
}

const crudOperationsContext = createContext<crudOperationContextProps>(defaultCrudContextValue);

const CrudOperationsProvider = ({ children }: childrenProp): JSX.Element => {

    const getTheLabel = ({ e }: eventChange): void => {
        setLabelInput(e.target.value)
    }

    const notesInitialArr: any[] = [];

    const [stateOfNotes, dispatchOfNotes] = useReducer(notesReducer, notesInitialArr);

    const [labelInput, setLabelInput] = useState("");

    return <crudOperationsContext.Provider value={{ stateOfNotes, dispatchOfNotes, labelInput, setLabelInput, getTheLabel }}>
        {children}
    </crudOperationsContext.Provider>
}

const useCrudOperations = () => useContext(crudOperationsContext);

export { useCrudOperations, CrudOperationsProvider };