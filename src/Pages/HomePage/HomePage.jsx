import "./HomePage.css";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Card from "./Card/Card";
import RoleCard from "./Card/RoleCard";

const HomePage = () => {
  return (
    <header>
      <div className="header-content">
        <div className="dogimg">
          <header className='homepage' ></header>
        </div>
        <div className="header_desc"> 
        <h1>Don't wanna leave your furry friend behind ?</h1>
        <h5>Let Fetchmate put your worries to rest. We'll pamper your <br/>pet like family, so you can travel with peace of mind."</h5>
        <h6> Join us now and let your pet's adventure begin.</h6>
        </div>
        
        <div className="Joinus-btn">
          <Button
            className="Joinus-btn"
            variant="outlined"
            endIcon={<i class="fa-solid fa-arrow-up-right-from-square"></i>}
            sx={{ border: 3 ,borderColor: "white",fontSize:15,fontWeight:"bold",color: "#C4FCF0" ,":hover": {bgcolor: "#006B5E", color: "#ffffff",border: 3 }}}  >
            Join us 
          </Button>
        </div>
      </div>

      <div className="Role-opetions">
          <RoleCard/>
      </div>

      <div className='containertop'>
         <h1 className="wju">Why Join us?</h1>
        <Card/>
        <button className="aboutus">Know More About Us <InfoOutlinedIcon fontSize="medium"/> </button>
      </div>
    </header>
  );
};

export default HomePage;
