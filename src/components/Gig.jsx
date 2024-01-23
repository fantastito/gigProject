import "./Gig.css"


const Gig = (props) => {
    return (
        <div id="gig" class="gig">
        <h3 class="band">{props.band}</h3>
        <img src={props.image} class="image"></img>
        <p class="gig-description">{props.description}</p>
        <p class="date">{props.date}</p>
        <p class="location">{props.location}</p>
        </div>
    );
};

export default Gig;
