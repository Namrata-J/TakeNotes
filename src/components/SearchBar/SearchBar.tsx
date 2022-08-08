import "./searchBar.css";
import { useHeader } from "../../contexts";

const SearchBar = () => {

    const { popUpSearchBarDisplay } = useHeader();

    return (
        <div
            className="tn_searchBar-popUp-outerContainer popUp-outerContainer"
            style={{ display: popUpSearchBarDisplay }}>
            <div className="tn_searchBar-popUp popUp b-rad1">
                <input
                    type="text"
                    placeholder="Search"
                    className="tn_searchBar b-rad1" />
            </div>
        </div>
    );
}

export { SearchBar };