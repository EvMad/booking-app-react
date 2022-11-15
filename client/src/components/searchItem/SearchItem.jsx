import "./searchItem.css";
import { Search1 } from "../../images/images.jsx";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={ Search1 } alt="View from Coastal Italian Hotel Room" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">South Gaul Apartments</h1>
                <span className="siDistance">0.7mi from center</span>
                <span className="siTaxiOp">Free airport shuttle</span>
            </div>
            <div className="siDetails"></div>
        </div>
    );
};

export default SearchItem;