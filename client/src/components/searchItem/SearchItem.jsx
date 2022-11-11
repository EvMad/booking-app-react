import "./searchItem.css";
import { Search1 } from "../../images/images.jsx";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={ Search1 } alt="View from Coastal Italian Hotel Room" className="siImg" />
            <div className="siDesc"></div>
            <div className="siDetails"></div>
        </div>
    );
};

export default SearchItem;