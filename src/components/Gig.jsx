import "./Gig.css"
import FavButton from "./favButton";

const Gig = (props) => {
    return (
        <div id="gig" className="gig">
        <h3 className="band">{props.band}</h3>
        <img src={props.image} class="image"></img>
        <p className="gig-description">{props.description}</p>
        <p className="date">{props.date}</p>
        <p className="location" data-testid="3">{props.location}</p>
        <FavButton />
        </div>
    );
};

export default Gig;
