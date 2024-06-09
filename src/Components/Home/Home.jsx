import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import EventSponsors from "../EventSponsors/EventSponsors";
import Events from "../Events/Events";
import Navbar from "../Navbar/NAvbar";
import Speakers from "../Speakers/Speakers";
import Speciality from "../Speciality/Speciality";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Banner2></Banner2>
            <Events></Events>
            <AboutUs></AboutUs>
            <Speciality></Speciality>
            <Speakers></Speakers>
            <EventSponsors></EventSponsors>
        </div>
    );
};

export default Home;