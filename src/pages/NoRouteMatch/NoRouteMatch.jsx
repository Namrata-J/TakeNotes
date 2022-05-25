import "./noRouteMatch.css";
import pageNotFoundImg from "../../assets/pageNotFoundImg.svg";

const PageNotFound = () => {
    return (
        <div className="tk_noRoutesMatch-page">
            <img src={pageNotFoundImg} />
            <p>Oooops!! Looks like the page you are looking for doesn't exist</p>
        </div>
    );
}

export { PageNotFound };