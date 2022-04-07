import "./filterAndSortPopUp.css";
import { GrFormClose } from "react-icons/gr";
import { useHeader } from "../../contexts/header-context";
import { useCrudOperations } from "../../contexts/crudOperations-context";
import { useFilterAndSort } from "../../contexts/filterAndSortContext";

const FilterAndSortPopUp = () => {

    const { popUpFilterAndSortDisplay, closeThePopUpFilterAndSort } = useHeader();
    const { stateOfNotes } = useCrudOperations();
    const { filterAndSortState, filterAndSortDispatch } = useFilterAndSort();

    const labeledNotes = stateOfNotes.filter(note => note.label !== "")

    const labelsReducer = (acc, curr) => !acc.includes(curr.label) ? [...acc, curr.label] : acc

    const uniqueLabels = labeledNotes.reduce(labelsReducer, []);

    return (
        <div className="tn_filter-popUp-outerContainer popUp-outerContainer" style={{ display: popUpFilterAndSortDisplay }}>
            <div className="tn_filter-popUp-container popUp b-rad1">
                <div className="tn_filter-subcontainer1">
                    <h4>Sort & Filter Notes</h4>
                    <GrFormClose className="tn_filter-popUp-closeBtn" onClick={() => { filterAndSortDispatch({ type: "CLEAR_FILTERS" }); closeThePopUpFilterAndSort() }} />
                </div>
                <div className="tn_filter-subcontainer2">

                    <label htmlFor="tn_sort" className="tn_popUp-subheading" >Sort By Date</label>
                    <select name="sortNotes" id="tn_sort" value={filterAndSortState.SortByDate} onChange={(e) => filterAndSortDispatch({ type: "SORT_BY_DATE", payload: e.target.value })} >
                        <option value=""></option>
                        <option value="Newest First">Newest First</option>
                        <option value="Oldest First">Oldest First</option>
                    </select>

                    <label htmlFor="tn_filter" className="tn_popUp-subheading" >Filter By Category</label>
                    <select name="filterNotes" id="tn_filter" value={filterAndSortState.FilterByCategory} onChange={(e) => filterAndSortDispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.value })} >
                        <option value=""></option>
                        <option value="Labels" >Labels</option>
                        <option value="Pinned" >Pinned</option>
                        <option value="Archived" >Archived</option>
                    </select>

                    {
                        labeledNotes.length > 0 ?
                            <>
                                <div className="tn_popUp-subheading" >Select Labels</div>
                                {
                                    uniqueLabels.map((label, index) => {
                                        return (
                                            <label className="tn_select-label" htmlFor={label} key={index}>
                                                <input type="checkbox" id={label} value={label} checked={filterAndSortState.FilterByLabels.includes(label)} onChange={(e) => filterAndSortDispatch({ type: "FILTER_BY_LABELS", payload: e.target.value })} />
                                                {label}
                                            </label>
                                        );
                                    })
                                }
                            </> : ""
                    }

                </div>
                <div className="tn_filter-subcontainer3">
                    <button className="tn_popUp-reset-btn et_p-simple-btn primary-color btn b-rad1" onClick={(e) => filterAndSortDispatch({ type: "CLEAR_FILTERS" })} >Reset</button>
                    <button className="tn_popUp-done-btn et_p-simple-btn primary-color btn b-rad1" onClick={() => closeThePopUpFilterAndSort()} >Done</button>
                </div>
            </div>
        </div>
    );
}

export { FilterAndSortPopUp };