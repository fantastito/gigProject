import "./App.css";
import Gig from "./components/Gig"
import ClickListener from "./components/clickListener";

import abbaImage from "./assets/abba.jpeg";
import EventLogger from "./components/eventLogger";
import Die from "./components/die";

const gig1 = {
    band: 'ABBA',
    image: abbaImage,
    description: "Get ready for the ABBA reunion gig. One night only and not to be missed - listen to all their classics, and some new music too!",
    date: '7pm - Friday 23rd February 2024',
    location: 'Birmingham'
}

const gig2 = {
  band: 'Queen',
  image: "https://m.media-amazon.com/images/M/MV5BMjI4OTIwNDAxMF5BMl5BanBnXkFtZTgwOTkzOTAyODE@._V1_.jpg",
  description: "All your head-banging favourites",
  date: '7pm - Saturday 24th February 2024',
  location: 'Newcastle'
}

const gig3 = {
  band: 'Carly Rae Jepsen',
  image: "https://www.euphoriazine.com/wp-content/uploads/2023/08/carly-rae-jepsen.jpg",
  description: "Party for 10,000",
  date: '6.30pm - Sunday 25th February 2024',
  location: 'Glasgow'
}

function App() {
  return (
    <body>
    <div>
    <ClickListener /><br/><br/>
    <EventLogger /><br/><br/>
    <Die />
    <header>
        <h1>GIG LISTINGS</h1>
    </header>
      <Gig band = {gig1.band}
      image = {gig1.image}
      description = {gig1.description}
      date = {gig1.date}
      location = {gig1.location}
      />
      <Gig band = {gig2.band}
      image = {gig2.image}
      description = {gig2.description}
      date = {gig2.date}
      location = {gig2.location}
      />
      <Gig band = {gig3.band}
      image = {gig3.image}
      description = {gig3.description}
      date = {gig3.date}
      location = {gig3.location}
      />
    </div>
    </body>
  );
}

export default App;
