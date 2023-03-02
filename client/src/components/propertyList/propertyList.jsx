import { Villa } from "../../images/images.jsx";
import { Apartment } from "../../images/images.jsx";
import { Hotel } from "../../images/images.jsx";
import { Resort } from "../../images/images.jsx";
import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading, error } = useFetch("hotels/countByType");

    const images = [{Villa, Apartment, Hotel, Resort}];

    return (
        <div className="pList">
       {loading ? ("loading") : (<>

       {data && images.map((img, i) => (   
       
        <div className="pListItem" key={i}>
         <img src={img} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
         <div className="pListTitles">
             <h1>{data[i]?.type}</h1>
             <h2>{data[i]?.count} {data[i]?.type}</h2>
         </div>
         </div>
         ))}
           </>
           )}
            </div>
    );
};

export default PropertyList;