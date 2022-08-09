import { textBoxObjType, textBoxAction } from "../../contexts/contextFiles.types";

const textBoxReducer = (stateOfTextBox: textBoxObjType, action: textBoxAction): textBoxObjType => {
    switch (action.type) {
        case "EXPAND_TEXTBOX":
            return { ...stateOfTextBox, headingDisplay: "none", formContentDisplay: "block" }
        case "CLOSE_TEXTBOX":
            return { ...stateOfTextBox, headingDisplay: "block", formContentDisplay: "none", titleText: "", descriptiveText: "" }
        case "UPDATE_TEXTBOX_TITLE":
            return { ...stateOfTextBox, titleText: action.payload }
        case "UPDATE_TEXTBOX_DESCRIPTION":
            return { ...stateOfTextBox, descriptiveText: action.payload }
    }
}

export { textBoxReducer };