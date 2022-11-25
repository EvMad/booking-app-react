import './hotel.css';
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { roomArray } from '../../images/images.jsx';
import { useState } from "react";

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);

    }

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
               {open &&  <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("")}/>
                <div className="sliderWrapper">
                <img src={roomArray[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("")/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>567 Grand Ave Los Angeles</span>
                    </div>
                    <span className="hotelDistance">Excellent Location - .5mi from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $200 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                            {roomArray.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="Hotel Interior" className="hotelImg" />
                                </div>
                            ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of Los Angeles</h1>
                            <p className="hotelDesc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p></div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 5-night stay!</h1>
                            <span>Located in the heart of Los Angeles, this property has an excellent location score of 9.1!</span>
                            <h2><b>$745</b> /5 nights </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
};

export default Hotel;