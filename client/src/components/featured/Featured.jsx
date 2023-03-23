import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
import { Chicago, NYC, Tokyo, Search1 } from "../../images/images.jsx";



const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

    return (
        <div className="featured">
    {loading ? ( "Loading please wait" ) : (
        <>        <div className="featuredItem">
        <img src={Search1} alt="Chicago skyline at sunset" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Amalfi</h1>
            <h2>{data[0]} Properties Available</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src={NYC} alt="Manhattan skyline" className="featuredImg" />
        <div className="featuredTitles">
            <h1>New York</h1>
            <h2>{data[1]} Properties Available</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src={Tokyo} alt="Tokyo Skyline at night" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Tokyo</h1>
            <h2>{data[2]} Properties Available</h2>
        </div>
    </div></>
    )}
        </div>
    );
};

export default Featured;