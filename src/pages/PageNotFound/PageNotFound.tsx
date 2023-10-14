// Modules
import { Link } from "react-router-dom";

// Images
import MyImage from "assets/images/pageNotFound.png";

export const PageNotFound = () => {
    return (
        <div className="wrapper">
            <img src={MyImage} alt="page not found" />
            <Link className="wrapper__btn" to="/">go home</Link>
        </div>
    );
};