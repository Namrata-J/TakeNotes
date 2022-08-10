import { filterAndSortReducer } from "../reducers/";
import { useReducer, useContext, createContext } from "react";
import { childrenProp, filterAndSortType, filterAndSortContextProps } from "./contextFiles.types";

const defaultFilterAndSortValue = {
    filterAndSortState: {
        SortByDate: "",
        FilterByCategory: "",
        FilterByLabels: [],
    },
    filterAndSortDispatch: () => { }
};

const filterAndSortContext = createContext<filterAndSortContextProps>(defaultFilterAndSortValue);

const FilterAndSortProvider = ({ children }: childrenProp): JSX.Element => {

    const filterAndSortInitialObj: filterAndSortType = {
        SortByDate: "",
        FilterByCategory: "",
        FilterByLabels: [],
    };

    const [filterAndSortState, filterAndSortDispatch] = useReducer(filterAndSortReducer, filterAndSortInitialObj);

    return <filterAndSortContext.Provider value={{ filterAndSortState, filterAndSortDispatch }}>
        {children}
    </filterAndSortContext.Provider>
}

const useFilterAndSort = () => useContext(filterAndSortContext);

export { useFilterAndSort, FilterAndSortProvider };