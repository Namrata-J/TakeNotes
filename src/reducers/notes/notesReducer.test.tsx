import { notesReducer } from "./notesReducer";
import { crudAction, note } from "../../contexts/contextFiles.types";

describe("tests for notes reducer", () => {
    // AAA - Arrange Act Assert

    test("should add note", () => {
        // Arrange
        const initialState: any[] = [];

        const action: crudAction = {
            type: "ADD_NOTE",
            payload: {
                _title: "i am title",
                _description: "i am description"
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        ];

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result.length).toBe(1)
        expect(result[0].title).toBe(expectedState[0].title)
        expect(result[0].description).toBe(expectedState[0].description)
    });

    test("should allow edit note", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "EDIT_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should disallow edit permission", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "SAVE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action)

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should update note title", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "UPDATE_NOTE_TITLE",
            payload: {
                note: {
                    _id: "123",
                    title: "i am title",
                    description: "i am description",
                    currDate: "2021-08-10T07:24:30.087+0000",
                    canEdit: true,
                    isPinned: false,
                    bgColor: "white",
                    colorPalette: true,
                    labelInput: false,
                    label: "",
                    isArchived: false,
                    isDeleted: false
                },
                value: "this is updated title"
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "this is updated title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should update note description", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "UPDATE_NOTE_DESCRIPTION",
            payload: {
                note: {
                    _id: '123'
                },
                value: "i am updated description"
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am updated description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should delete note temporarily", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "DELETE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: true
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should delete note permanently", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: true
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "DELETE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: true
            }
        }

        const expectedState: note[] = [
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should pin the note", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "PIN_THE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should unpin the note", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "UNPIN_THE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should toggle color palette display", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "COLOR_PALETTE_DISPLAY",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: true,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should update note background color", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "NOTE_BACKGROUND_COLOR",
            payload: {
                note: {
                    _id: "123",
                    title: "i am title",
                    description: "i am description",
                    currDate: "2021-08-10T07:24:30.087+0000",
                    canEdit: false,
                    isPinned: true,
                    bgColor: "white",
                    colorPalette: false,
                    labelInput: false,
                    label: "",
                    isArchived: false,
                    isDeleted: false
                },
                bgColor: "black"
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "black",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should toggle label input display", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "LABEL_INPUT_DISPLAY",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: true,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should add label", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "ADD_LABEL",
            payload: {
                note: {
                    _id: "123",
                    title: "i am title",
                    description: "i am description",
                    currDate: "2021-08-10T07:24:30.087+0000",
                    canEdit: false,
                    isPinned: true,
                    bgColor: "white",
                    colorPalette: false,
                    labelInput: false,
                    label: "",
                    isArchived: false,
                    isDeleted: false
                },
                label: "Office"
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "Office",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should archive note", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "ARCHIVE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should restore note", () => {
        // Arrange
        const initialState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        const action: crudAction = {
            type: "RESTORE_NOTE",
            payload: {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            }
        }

        const expectedState: note[] = [
            {
                _id: "123",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "12345",
                title: "i am title",
                description: "i am description",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: false,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            }
        ]

        // Act
        const result = notesReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });
});