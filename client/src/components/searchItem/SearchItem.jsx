import "./searchItem.css";
import { Search1 } from "../../images/images.jsx";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={ Search1 } alt="" className="siImg" />
            <div className="siDesc"></div>
            <div className="siDesc"></div>
        </div>
    );
};

export default SearchItem;