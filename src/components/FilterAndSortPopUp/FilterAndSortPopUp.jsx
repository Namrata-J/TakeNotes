import "./filterAndSortPopUp.css";
import { GrFormClose } from "react-icons/gr";
import { useHeader } from "../../contexts/header-context";

const FilterAndSortPopUp = () => {

    const { popUpFilterAndSortDisplay, closeThePopUpFilterAndSort} = useHeader();

    return (
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
                    <button className="tn_popUp-done-btn et_p-simple-btn primary-color btn b-rad1" onClick={() => closeThePopUpFilterAndSort()} >Done</button>
                </div>
            </div>
        </div>
    );
}

export { FilterAndSortPopUp };