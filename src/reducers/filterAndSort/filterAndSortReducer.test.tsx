import { filterAndSortType, filterAndSortAction } from "../../contexts/contextFiles.types";
import { filterAndSortReducer } from "./filterAndSortReducer";

describe("tests for filter and sort reducer", () => {
    // AAA - Arrange Act Assert

    test("should include what to sort by date", () => {
        // Arrange
        const initialState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: [],
        };

        const action: filterAndSortAction = {
            type: "SORT_BY_DATE",
            payload: "Newest_First"
        }

        const expectedState: filterAndSortType = {
            SortByDate: "Newest_First",
            FilterByCategory: "",
            FilterByLabels: [],
        }

        // Act
        const result = filterAndSortReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should include category to be filtered", () => {
        // Arrange
        const initialState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: [],
        };

        const action: filterAndSortAction = {
            type: "FILTER_BY_CATEGORY",
            payload: "Pinned"
        }

        const expectedState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "Pinned",
            FilterByLabels: [],
        }

        // Act
        const result = filterAndSortReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should include category to be filtered", () => {
        // Arrange
        const initialState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: [],
        };

        const action: filterAndSortAction = {
            type: "FILTER_BY_LABELS",
            payload: "office"
        }

        const expectedState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: ["office"],
        }

        // Act
        const result = filterAndSortReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });

    test("should clear all filters", () => {
        // Arrange
        const initialState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "Pinned",
            FilterByLabels: ["office"],
        };

        const action: filterAndSortAction = {
            type: "CLEAR_FILTERS"
        }

        const expectedState: filterAndSortType = {
            SortByDate: "",
            FilterByCategory: "",
            FilterByLabels: [],
        }

        // Act
        const result = filterAndSortReducer(initialState, action);

        // Assert
        expect(result).toEqual(expectedState)
    });
});