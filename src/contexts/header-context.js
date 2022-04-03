import React, { useState, useContext, createContext } from "react";

const headerContext = createContext(null);

const HeaderProvider = ({ children }) => {
    
    const [ popUpFilterAndSortDisplay, setPopUpFilterAndSortDisplay ] = useState("none");
    const [ popUpSearchBarDisplay, setPopUpSearchBarDisplay ] = useState("none");

    const getThePopUpSearchBarDisplay = () => {
        popUpSearchBarDisplay === "none" ? setPopUpSearchBarDisplay("flex") : setPopUpSearchBarDisplay("none")
    }

    const getThePopUpFilterAndSortDisplay =() => {
        popUpFilterAndSortDisplay === "none" ? setPopUpFilterAndSortDisplay("flex") : setPopUpFilterAndSortDisplay("none")
    }

    const closeThePopUpFilterAndSort = () => {
        setPopUpFilterAndSortDisplay("none")
    }

    return <headerContext.Provider value={{ popUpFilterAndSortDisplay, popUpSearchBarDisplay, getThePopUpSearchBarDisplay, getThePopUpFilterAndSortDisplay, closeThePopUpFilterAndSort }}>
        { children }
    </headerContext.Provider>
}

const useHeader = () => useContext(headerContext);

export { useHeader, HeaderProvider };