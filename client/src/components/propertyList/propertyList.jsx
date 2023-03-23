import { Villa } from "../../images/images.jsx";
import { Apartment } from "../../images/images.jsx";
import { Hotel } from "../../images/images.jsx";
import { Resort } from "../../images/images.jsx";
import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading, error } = useFetch("hotels/countByType");

    const images = [{Villa, Apartment, Hotel, Resort}];

    var randomPhoto = images[Math.floor(Math.random() * images.length)];

    return (
        <div className="pList">

<div className="pListItem">
         <img src={Villa} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
         <div className="pListTitles">
             <h1>Villas</h1>
             <h2>Explore More Available Villas</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Apartment} alt="Apartment Living Room" className="pListImg" />
         <div className="pListTitles">
             <h1>Apartments</h1>
             <h2>Explore More Available Apartments</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Hotel} alt="Hotel Balcony" className="pListImg" />
         <div className="pListTitles">
             <h1>Hotels</h1>
             <h2>Explore More Available Hotels</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Resort} alt="Oceanside bungalows" className="pListImg" />
         <div className="pListTitles">
             <h1>Resorts</h1>
             <h2>Explore More Available Resorts</h2>
         </div>
         </div>

       {loading ? ("loading") : (<>

       {data && images.map((img, i) => (   
       
        <div className="pListItem" key={i}>
         <img src={Resort} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
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