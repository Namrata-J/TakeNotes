import { textBoxObjType, textBoxAction } from "../../contexts/contextFiles.types";
import { textBoxReducer } from "./textBoxReducer";

describe("tests for textBox reducer", () => {
    // AAA - Arrange Act Assert

    test("should expand textbox", () => {
        // Arrange
        const initialTextBoxObj: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: ""
        };

        const action: textBoxAction = {
            type: "EXPAND_TEXTBOX"
        }

        const expectedState: textBoxObjType = {
            headingDisplay: "none",
            formContentDisplay: "block",
            titleText: "",
            descriptiveText: ""
        }

        // Act
        const result = textBoxReducer(initialTextBoxObj, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should close textbox", () => {
        // Arrange
        const initialTextBoxObj: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: ""
        };

        const action: textBoxAction = {
            type: "CLOSE_TEXTBOX"
        }

        const expectedState: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: ""
        }

        // Act
        const result = textBoxReducer(initialTextBoxObj, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should update textbox title", () => {
        // Arrange
        const initialTextBoxObj: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: ""
        };

        const action: textBoxAction = {
            type: "UPDATE_TEXTBOX_TITLE",
            payload: "i am title"
        }

        const expectedState: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "i am title",
            descriptiveText: ""
        }

        // Act
        const result = textBoxReducer(initialTextBoxObj, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should update textbox description", () => {
        // Arrange
        const initialTextBoxObj: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: ""
        };

        const action: textBoxAction = {
            type: "UPDATE_TEXTBOX_DESCRIPTION",
            payload: "this is description"
        }

        const expectedState: textBoxObjType = {
            headingDisplay: "block",
            formContentDisplay: "none",
            titleText: "",
            descriptiveText: "this is description"
        }

        // Act
        const result = textBoxReducer(initialTextBoxObj, action);

        // Assert
        expect(result).toEqual(expectedState)
    });
});