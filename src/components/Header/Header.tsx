import "./header.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";
import { GiToggles } from "react-icons/gi";
import { useHeader } from "../../contexts";
import { AiOutlineSetting } from "react-icons/ai";
import { SearchBar } from "../SearchBar/SearchBar";
import { FilterAndSortPopUp } from "../FilterAndSortPopUp/FilterAndSortPopUp";

const Header = () => {

    const { getThePopUpSearchBarDisplay, getThePopUpFilterAndSortDisplay } = useHeader();

    return (
        <div className="tn_header-component">
            <div className="tn_header-content">
                <Link to="/" className="tn_header-heading">
                    <h4 className="tn_header-heading">
                        TakeNotes
                    </h4>
                </Link>
                <input
                    type="text"
                    placeholder="Search"
                    className="tn_header-searchBar b-rad1" />
                <div className="tn_icons-section">
                    <FiSearch className="tn_header-search-icon header-icon"
                        onClick={() => getThePopUpSearchBarDisplay()} />
                    <GiToggles className="tn_header-filter-icon header-icon"
                        onClick={() => getThePopUpFilterAndSortDisplay()} />
                    <AiOutlineSetting className="tn_header-settings-icon header-icon" />
                    <BsSunFill className="tn_header-lightmode-icon header-icon" />
                    <Link to="/profile">
                        <img
                            className="tn_header-profile-icon et_circular-avatar xs-avatar b-rad4"
                            src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131__340.jpg"
                            alt="profile" />
                    </Link>
                </div>
            </div>

            <SearchBar />

            <FilterAndSortPopUp />

        </div>
    );
}

export { Header };