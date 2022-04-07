import "./sideBar.css";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { BsArchive, BsTrash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useTextBox } from "../../contexts/textBox-context";

const sideBarLinksArr = [
    {
        pagePath: "/home",
        icon: <AiOutlineHome />,
        pageName: "Home"
    },
    {
        pagePath: "/labels",
        icon: <MdLabelOutline />,
        pageName: "Labels"
    },
    {
        pagePath: "/archive",
        icon: <BsArchive />,
        pageName: "Archive"
    },
    {
        pagePath: "/trash",
        icon: <BsTrash />,
        pageName: "Trash"
    },
    {
        pagePath: "/profile",
        icon: <CgProfile />,
        pageName: "Profile"
    },
    {
        pagePath: "/logOut",
        icon: <AiOutlineLogout />,
        pageName: "Logout"
    }
];

const SideBar = () => {

    const { dispatchOfTextBox } = useTextBox();

    return (
        <div className="tn_sideBar-component">
            <div className="tn_sideBar-content a-tl">
                {
                    sideBarLinksArr.map(( page, index ) => {
                        return (
                            <Link to={ page.pagePath } className="tn_each-content" key={ index } >
                                <i className="tn_sideBar-icons">{ page.icon }</i>
                                <div className="tn_page-name">{ page.pageName }</div>
                            </Link>
                        )
                    })
                }

                <button className="tn_addNote-primary-btn et_p-simple-btn primary-color btn" onClick={() => dispatchOfTextBox({ type: "EXPAND_TEXTBOX" })} >Add Note</button>

            </div>
        </div>
    );
}

export { SideBar };