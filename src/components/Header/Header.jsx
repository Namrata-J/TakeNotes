import "./header.css";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { GiToggles } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Header = () => {

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

    return (
        <div className="tn_header-component">
            <div className="tn_header-content">
                <Link to="/" className="tn_header-heading"><h4 className="tn_header-heading">TakeNotes</h4></Link>
                <input type="text" placeholder="Search" className="tn_header-searchBar b-rad1" />
                <div className="tn_icons-section">
                    <FiSearch className="tn_header-search-icon header-icon" onClick={() => getThePopUpSearchBarDisplay()} />
                    <GiToggles className="tn_header-filter-icon header-icon" onClick={() => getThePopUpFilterAndSortDisplay()} />
                    <AiOutlineSetting className="tn_header-settings-icon header-icon" />
                    <BsSunFill className="tn_header-lightmode-icon header-icon" />
                    <Link to="/profile">
                        <img className="tn_header-profile-icon et_circular-avatar xs-avatar b-rad4" src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131__340.jpg" alt="profile" />
                    </Link>
                </div>
            </div>

            <div className="tn_searchBar-popUp-outerContainer popUp-outerContainer" style={{ display: popUpSearchBarDisplay }}>
                <div className="tn_searchBar-popUp popUp b-rad1">
                    <input type="text" placeholder="Search" className="tn_searchBar b-rad1" />
                </div>
            </div>

            <div className="tn_filter-popUp-outerContainer popUp-outerContainer" style={{ display: popUpFilterAndSortDisplay }}>
                <div className="tn_filter-popUp-container popUp b-rad1">
                    <div className="tn_filter-subcontainer1">
                        <h4>Sort & Filter Notes</h4>
                        <GrFormClose className="tn_filter-popUp-closeBtn" onClick={() => closeThePopUpFilterAndSort()} />
                    </div>
                    <div className="tn_filter-subcontainer2">

                        <label htmlFor="tn_sort" className="tn_popUp-subheading" >Sort By</label>
                        <input type="text" name="sortNotes" defaultValue="Newest First" list="sortList" id="tn_sort" />
                        <datalist id="sortList">
                            <option value="Newest First" />
                        </datalist>

                        <label htmlFor="tn_filter" className="tn_popUp-subheading" >Filter By</label>
                        <input type="text" name="filterNotes" defaultValue="Labels" list="filterList" id="tn_filter" />
                        <datalist id="filterList">
                            <option value="Labels" />
                            <option value="Pinned" />
                            <option value="Archived" />
                        </datalist>

                        <div className="tn_popUp-subheading" >Select Labels</div>
                        <label className="tn_select-label" htmlFor="label-1">
                            <input type="checkbox" id="label-1" />
                            Label 1
                        </label>
                        <label className="tn_select-label" htmlFor="label-2">
                            <input type="checkbox" id="label-2" />
                            Label 2
                        </label>
                        <label className="tn_select-label" htmlFor="label-3">
                            <input type="checkbox" id="label-3" />
                            Label 3
                        </label>

                    </div>
                    <div className="tn_filter-subcontainer3">
                        <button className="tn_popUp-done-btn et_p-simple-btn primary-color btn" onClick={() => closeThePopUpFilterAndSort()} >Done</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { Header };