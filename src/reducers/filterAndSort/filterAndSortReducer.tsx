import { filterAndSortType, filterAndSortAction } from "../../contexts/contextFiles.types";

const filterAndSortReducer = (filterAndSortState: filterAndSortType, action: filterAndSortAction): filterAndSortType => {
    switch (action.type) {
        case "SORT_BY_DATE":
            return { ...filterAndSortState, SortByDate: action.payload }
        case "FILTER_BY_CATEGORY":
            return { ...filterAndSortState, FilterByCategory: action.payload }
        case "FILTER_BY_LABELS":
            return {
                ...filterAndSortState,
                FilterByLabels: filterAndSortState.FilterByLabels.includes(action.payload) ?
                    filterAndSortState.FilterByLabels.filter(label => label !== action.payload) :
                    [...filterAndSortState.FilterByLabels, action.payload]
            }
        case "CLEAR_FILTERS":
            return { ...filterAndSortState, SortByDate: "", FilterByCategory: "", FilterByLabels: [] }
        default:
            return filterAndSortState
    }
}

export { filterAndSortReducer };