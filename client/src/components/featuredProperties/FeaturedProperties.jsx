import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css";
import { Feature1, Feature2, Feature3, Feature4 } from "../../images/images.jsx";


const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

    var photoArray = { Feature1, Feature2, Feature3, Feature4 };

    var randomPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];

    return (
        <div className="fp">
            {loading ? ("Loading") : 
            (<>{data.map((item) => (
                
            <div className="fpItem" key={item._id}>
            <img className="fpImg" src={randomPhoto} alt="Featured Property" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
           {item.rating &&  <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
            </div>}
            </div>
            ))}</>)}
       
        </div>
        
        
    );
};

export default FeaturedProperties;