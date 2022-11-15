import "./searchItem.css";
import { Search1 } from "../../images/images.jsx";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={ Search1 } alt="View from Coastal Italian Hotel Room" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Oia Suites</h1>
                <span className="siDistance">0.1mi from center</span>
                <span className="siTaxiOp">Free airport shuttle</span>
                <span className="siSubtitle">
                    One Bedroom Apartment with Balcony
                </span>
                <span className="siFeatures">
                    Entire apartment {`\u00B7`} 1 bathroom {`\u00B7`}  1 queen bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;