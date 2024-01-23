import "./Gig.css"
import abbaImage from "../assets/abba.jpeg";

const Gig = () => {
    return (
        <div id="gig" class="gig">
        <h3 class="band">ABBA</h3>
        <img src={abbaImage} class="image"></img>
        <p class="gig-description">Get ready for the ABBA reunion gig. One night only and not to be missed - listen to all their classics, and some new music too!</p>
        <p class="date">7pm - Friday 23rd February 2024</p>
        <p class="location">Birmingham</p>
        </div>
    );
};

export default Gig;
