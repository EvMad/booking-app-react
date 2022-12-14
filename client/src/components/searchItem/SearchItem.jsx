import "./searchItem.css";
import { Search1 } from "../../images/images.jsx";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="View from Coastal Italian Hotel Room" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}mi from center</span>
                <span className="siTaxiOp">Free airport shuttle</span>
                <span className="siSubtitle">
                    One Bedroom Apartment with Balcony
                </span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
              {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailText">
                    <span className="siPrice">{item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;