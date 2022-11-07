import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <img className="fpImg" src="" alt="" />
            <span className="fpName">Fountain Hotel</span>
            <span className="fpCity">Rome, Italy</span>
            <span className="fpPrice">Starting from $110</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    );
};

export default FeaturedProperties;