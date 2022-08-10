import { textBoxReducer } from "../reducers/";
import { useReducer, useContext, createContext } from "react";
import { childrenProp, textBoxObjType, textBoxContextProps } from "./contextFiles.types";

const initialTextBoxContextValue = {
   stateOfTextBox: {
      headingDisplay: "block",
      formContentDisplay: "none",
      titleText: "",
      descriptiveText: ""
   },
   dispatchOfTextBox: () => { }
};

const textBoxContext = createContext<textBoxContextProps>(initialTextBoxContextValue);

const TextBoxProvider = ({ children }: childrenProp): JSX.Element => {

   const initialTextBoxObj: textBoxObjType = {
      headingDisplay: "block",
      formContentDisplay: "none",
      titleText: "",
      descriptiveText: ""
   };

   const [stateOfTextBox, dispatchOfTextBox] = useReducer(textBoxReducer, initialTextBoxObj);

   return <textBoxContext.Provider value={{ stateOfTextBox, dispatchOfTextBox }}>
      {children}
   </textBoxContext.Provider>
}

const useTextBox = () => useContext(textBoxContext);

export { useTextBox, TextBoxProvider };
