import React, { useReducer, useContext, createContext } from "react";

const filterAndSortContext = createContext(null);

const FilterAndSortProvider = ({ children }) => {

    const filterAndSortReducer = (filterAndSortState, action) => {
        switch(action.type){
            case "SORT_BY_DATE":
                return { ...filterAndSortState, SortByDate: action.payload }
            case "FILTER_BY_CATEGORY":
                return { ...filterAndSortState, FilterByCategory: action.payload }
            case "FILTER_BY_LABELS":
                return { ...filterAndSortState, FilterByLabels: filterAndSortState.FilterByLabels.includes(action.payload)? filterAndSortState.FilterByLabels.filter(label => label !== action.payload) : [...filterAndSortState.FilterByLabels, action.payload] }
            case "CLEAR_FILTERS":
                return { ...filterAndSortState, SortByDate: "", FilterByCategory: "", FilterByLabels: [] }
            default:
                return filterAndSortState
        }
    }

    const filterAndSortInitialObj = {
        SortByDate : "",
        FilterByCategory: "",
        FilterByLabels: [],
    };

    const [ filterAndSortState, filterAndSortDispatch ] = useReducer( filterAndSortReducer, filterAndSortInitialObj );

    return <filterAndSortContext.Provider value={{ filterAndSortState, filterAndSortDispatch }}>
        { children }
    </filterAndSortContext.Provider>
}

const useFilterAndSort = () => useContext(filterAndSortContext);

export { useFilterAndSort, FilterAndSortProvider };