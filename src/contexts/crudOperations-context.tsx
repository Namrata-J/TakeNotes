import { useState, useReducer, useContext, createContext } from "react";
import { childrenProp, note, crudAction, eventChange, crudOperationContextProps } from "./contextFiles.types";
import { v4 as uuid } from "uuid";

const defaultCrudContextValue = {
    stateOfNotes: [],
    dispatchOfNotes: () => { },
    labelInput: "",
    setLabelInput: () => { },
    getTheLabel: () => { }
}

const crudOperationsContext = createContext<crudOperationContextProps>(defaultCrudContextValue);

const CrudOperationsProvider = ({ children }: childrenProp): JSX.Element => {

    const notesReducer = (stateOfNotes: note[], action: crudAction): note[] => {
        switch (action.type) {
            case "ADD_NOTE":
                return [
                    ...stateOfNotes,
                    {
                        _id: uuid(),
                        title: action.payload._title,
                        description: action.payload._description,
                        currDate: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                        canEdit: false,
                        isPinned: false,
                        bgColor: "white",
                        colorPalette: false,
                        labelInput: false,
                        label: "",
                        isArchived: false,
                        isDeleted: false
                    }]
            case "EDIT_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, canEdit: true } :
                        currNote)
                ]
            case "SAVE_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, canEdit: false, colorPalette: false, labelInput: false } :
                        currNote)
                ]
            case "UPDATE_NOTE_TITLE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id ?
                        { ...currNote, title: action.payload.value } :
                        currNote)
                ]
            case "UPDATE_NOTE_DESCRIPTION":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id ?
                        { ...currNote, description: action.payload.value } :
                        currNote)
                ]
            case "DELETE_NOTE":
                // return [
                //     ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                //         action.payload.isDeleted === true ?
                //             [...stateOfNotes.filter(currNote => currNote._id !== action.payload._id)] :
                //             { ...currNote, isPinned: false, isArchived: false, isDeleted: true } :
                //         currNote)
                // ]
                return action.payload.isDeleted === true ?
                    [...stateOfNotes.filter((currNote) => currNote._id !== action.payload._id)] :
                    [...stateOfNotes.map((currNote) => currNote._id === action.payload._id ?
                        { ...currNote, isPinned: false, isArchived: false, isDeleted: true } :
                        currNote)]
            case "PIN_THE_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, isPinned: true, isArchived: false } :
                        currNote)
                ]
            case "UNPIN_THE_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, isPinned: false } :
                        currNote)
                ]
            case "COLOR_PALETTE_DISPLAY":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, colorPalette: !currNote.colorPalette, labelInput: false } :
                        currNote)
                ]
            case "NOTE_BACKGROUND_COLOR":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id ?
                        { ...currNote, bgColor: action.payload.bgColor } :
                        currNote)
                ]
            case "LABEL_INPUT_DISPLAY":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, colorPalette: false, labelInput: !currNote.labelInput } :
                        currNote)
                ]
            case "ADD_LABEL":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload.note._id ?
                        { ...currNote, labelInput: false, label: action.payload.label } :
                        currNote)
                ]
            case "ARCHIVE_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id == action.payload._id ?
                        { ...currNote, isPinned: false, isArchived: !currNote.isArchived } :
                        currNote)
                ]
            case "RESTORE_NOTE":
                return [
                    ...stateOfNotes.map(currNote => currNote._id === action.payload._id ?
                        { ...currNote, isDeleted: false, isPinned: false, isArchived: false } :
                        currNote)
                ]
            default:
                return stateOfNotes
        }
    }

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