import { sortByDateFunc, filterByCategoryFunc, filterByLabelsFunc } from "./filterAndSortFunc";
import { note, filterAndSortType } from "../contexts/contextFiles.types";

describe("testing util filter and sort functions in take notes", () => {
    // AAA - Arrange Act Assert
    test("should sort notes by newest date", () => {
        //Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "Newest First",
            FilterByCategory: "",
            FilterByLabels: [],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act
        const result = sortByDateFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });

    test("should sort notes by oldest date", () => {
        //Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "Oldest First",
            FilterByCategory: "",
            FilterByLabels: [],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act
        const result = sortByDateFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });

    test("should filter notes by label category", () => {
        // Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "Labels",
            FilterByLabels: [],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act
        const result = filterByCategoryFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });

    test("should filter notes by pinned category", () => {
        // Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "Pinned",
            FilterByLabels: [],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act
        const result = filterByCategoryFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });

    test("should filter notes by archived category", () => {
        // Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "Archived",
            FilterByLabels: [],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act 
        const result = filterByCategoryFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });

    test("should filter notes with particular label among available labels", () => {
        // Arrange
        const filterAndSortState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: ["work", "office"],
        }

        const stateOfNotes: note[] = [
            {
                _id: "123",
                title: "This is title",
                description: "i am body",
                currDate: "2021-08-10T07:24:30.087+0000",
                canEdit: true,
                isPinned: false,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "study",
                isArchived: true,
                isDeleted: false
            },
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        const expectedResult = [
            {
                _id: "124",
                title: "This is title",
                description: "i am body",
                currDate: "2021-09-30T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "work",
                isArchived: false,
                isDeleted: false
            },
            {
                _id: "125",
                title: "This is title",
                description: "i am body",
                currDate: "2021-10-13T07:24:30.087+0000",
                canEdit: true,
                isPinned: true,
                bgColor: "white",
                colorPalette: false,
                labelInput: false,
                label: "office",
                isArchived: true,
                isDeleted: false
            }
        ];

        // Act
        const result = filterByLabelsFunc(filterAndSortState, stateOfNotes);

        // Assert
        expect(result).toEqual(expectedResult)
    });
});