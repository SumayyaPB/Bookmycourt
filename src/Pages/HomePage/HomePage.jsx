import Block from "../../Components/Common/Block";
import CustomCarosul from "../../Components/Common/CustomCarosul";
import CustomNavbar from "../../Components/Common/CustomNavbar";
import { TbWorldSearch } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";
import { IoFootball } from "react-icons/io5";
import "./HomePage.css";
import Cards from "../../Components/Common/Cards";
import user from '@/assets/user.svg'
import location from '@/assets/location.svg'
import clock from '@/assets/slot.svg'
import offer from '@/assets/offerIcon.svg'
import smile from '@/assets/smile.svg'

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarosul />
      <div className="container">
      <div className="row justify-content-around gap-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Block
            image={<TbWorldSearch />}
            heading="Search"
            content="Are you looking to play after work, organize your Sunday five's football match? Explore sports facilities across India."
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Block
            image={<BiCalendar />}
            heading="Book"
            content="Once you've found the perfect ground, court, or gym, connect with the venue through the Book Now Button to make an online booking."
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Block
            image={<IoFootball />}
            heading="Play"
            content="You’re the hero! You've found a great turf or court and booked it with ease. Now it's time to play and enjoy your game."
          />
        </div>
      </div>
    </div>

      <div className="d-flex justify-content-between flex-wrap g-4 gy-4">
         <Cards 
            image={user}
            heading="1000+"
            content="Happy Customers"
          />
         <Cards
            image={location}
            heading="100+ location"
            content="Available 20+ States in India"
         />
         <Cards
              image={clock}
              heading="24/7 Access"
              content="Choose Faviorite slots"
         />
         <Cards
              image={offer}
              heading="Welcome Offers"
              content="Get free access to all courts"
         />
         <Cards
             image={smile}
             heading="Free Rented Accessories"
             content="Happy Customer"
         />
      </div>
    </div>
  );
};

export default HomePage;
