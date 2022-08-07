import { note, filterAndSortType } from "../contexts/contextFiles.types";

const sortByDateFunc = (filterAndSortState: filterAndSortType, stateOfNotes: note[]) => {
    switch (filterAndSortState.SortByDate) {
        case "Newest First":
            return [...stateOfNotes].sort((a, b) => Date.parse(b.currDate.split("/").reverse().join("-")) - Date.parse(a.currDate.split("/").reverse().join("-")))
        case "Oldest First":
            return [...stateOfNotes].sort((a, b) => Date.parse(a.currDate.split("/").reverse().join("-")) - Date.parse(b.currDate.split("/").reverse().join("-")))
        default:
            return stateOfNotes
    }
}

const filterByCategoryFunc = (filterAndSortState: filterAndSortType, stateOfNotes: note[]) => {
    switch (filterAndSortState.FilterByCategory) {
        case "Labels":
            return [...stateOfNotes].filter(note => note.label !== "")
        case "Pinned":
            return [...stateOfNotes].filter(note => note.isPinned === true)
        case "Archived":
            return [...stateOfNotes].filter(note => note.isArchived === true)
        default:
            return stateOfNotes
    }
}

const filterByLabelsFunc = (filterAndSortState: filterAndSortType, stateOfNotes: note[]) => {
    return filterAndSortState.FilterByLabels.length > 0 ? [...stateOfNotes].filter(note => filterAndSortState.FilterByLabels.includes(note.label)) : stateOfNotes
}

export { sortByDateFunc, filterByCategoryFunc, filterByLabelsFunc };