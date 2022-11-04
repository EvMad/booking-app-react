import "./featured.css";
import Chicago from "../../images/Chicago.jpg";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={Chicago} alt="Chicago skyline at sunset" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Chicago</h1>
                </div>
            </div>
        </div>
    );
};

export default Featured;