import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css";
import { Feature1, Feature2, Feature3, Feature4 } from "../../images/images.jsx";


const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

    return (
        <div className="fp">
            {loading ? ("Loading") : 
            (<>{data.map((item) => (
                
            <div className="fpItem" key={item._id}>
            <img className="fpImg" src={ Feature1 } alt="" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">Rome, Italy</span>
            <span className="fpPrice">Starting from $110</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
            </div>
            ))}</>)}
       
        </div>
        
        
    );
};

export default FeaturedProperties;