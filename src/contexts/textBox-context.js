import React, { useReducer, useContext, createContext } from "react";

const textBoxContext = createContext(null);

const TextBoxProvider = ({ children }) => {

   const textBoxReducer = ( stateOfTextBox, action ) => {
       switch(action.type){
            case "EXPAND_TEXTBOX":
               return { ...stateOfTextBox, headingDisplay: "none", formContentDisplay: "block" }
            case "CLOSE_TEXTBOX":
               return { ...stateOfTextBox, headingDisplay: "block", formContentDisplay: "none" }
       }
   }

   const initialTextBoxObj = {
       headingDisplay: "block",
       formContentDisplay: "none",
   };

   const [ stateOfTextBox, dispatchOfTextBox ] = useReducer( textBoxReducer, initialTextBoxObj );

    return <textBoxContext.Provider value={{ stateOfTextBox, dispatchOfTextBox }}>
        { children }
    </textBoxContext.Provider>
}

const useTextBox = () => useContext(textBoxContext);

export { useTextBox, TextBoxProvider };
