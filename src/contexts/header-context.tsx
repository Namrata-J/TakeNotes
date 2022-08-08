import { useState, useContext, createContext } from "react";
import { childrenProp, headerContextProps } from "./contextFiles.types";

const defaultHeaderContextValue = {
    popUpFilterAndSortDisplay: "",
    popUpSearchBarDisplay: "",
    getThePopUpSearchBarDisplay: () => {},
    getThePopUpFilterAndSortDisplay: () => {},
    closeThePopUpFilterAndSort: () => {}
};

const headerContext = createContext<headerContextProps>(defaultHeaderContextValue);

const HeaderProvider = ({ children }: childrenProp): JSX.Element => {

    const [popUpFilterAndSortDisplay, setPopUpFilterAndSortDisplay] = useState("none");
    const [popUpSearchBarDisplay, setPopUpSearchBarDisplay] = useState("none");

    const getThePopUpSearchBarDisplay = (): void => {
        popUpSearchBarDisplay === "none" ? setPopUpSearchBarDisplay("flex") : setPopUpSearchBarDisplay("none")
    }

    const getThePopUpFilterAndSortDisplay = (): void => {
        popUpFilterAndSortDisplay === "none" ? setPopUpFilterAndSortDisplay("flex") : setPopUpFilterAndSortDisplay("none")
    }

    const closeThePopUpFilterAndSort = (): void => {
        setPopUpFilterAndSortDisplay("none")
    }

    return <headerContext.Provider
        value={{
            popUpFilterAndSortDisplay,
            popUpSearchBarDisplay,
            getThePopUpSearchBarDisplay,
            getThePopUpFilterAndSortDisplay,
            closeThePopUpFilterAndSort
        }}>
        {children}
    </headerContext.Provider>
}

const useHeader = () => useContext(headerContext);

export { useHeader, HeaderProvider };