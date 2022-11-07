import "./featuredProperties.css";
import { Feature1, Feature2, Feature3 } from "../../images/images.jsx";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItm">
            <img className="fpImg" src={ Feature1 } alt="" />
            <span className="fpName">Fountain Hotel</span>
            <span className="fpCity">Rome, Italy</span>
            <span className="fpPrice">Starting from $110</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItm">
            <img className="fpImg" src={ Feature2 } alt="" />
            <span className="fpName">Boutique Hotel Garden</span>
            <span className="fpCity">Athens, Greece</span>
            <span className="fpPrice">Starting from $130</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItm">
            <img className="fpImg" src={ Feature3 } alt="" />
            <span className="fpName">Aparthotel Grand</span>
            <span className="fpCity">Bangkok, Thailand</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
            </div>
            </div>
        </div>
        
        
    );
};

export default FeaturedProperties;