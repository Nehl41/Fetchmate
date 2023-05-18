import "./Nav.css";

import fmlogo from "../../assets/Image/logo-color.png";
import Button from "@mui/material/Button";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PaidIcon from "@mui/icons-material/Paid";
import AddTrackerModal from "../../components/Modal/TrackerModalPage";
import Petsitterform from "../../components//Modal/Petsitterform/Petsitterform"
import PaymentModal from "../../components//Modal/PaymentModal/Paymentpage"
import { ClickAwayListener, Menu, MenuItem, Typography } from "@mui/material";
// import userData from "../../utils/getUserData";

import { Popover, Stack, Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import ProfileModal from "../ProfileModal/ProfileModal";
import axios from "axios";

const Nav = () => {

  const navigate=useNavigate()

  const [showsitterModal, setsitterShowModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [showpaymentModal, setpaymentShowModal] = useState(false);

  const [displaySignup, setDisplaySignup] = useState("inline");

  const [displayLogin, setDisplayLogin] = useState("inline");

  const { pathname } = useLocation();

  const [displayCurrentRequests,setCurrentRequests]=useState()

  const [anchorEl, setAnchorEl] = useState(null);

  const [profileEl,setprofileEl]=useState(null);
  const openProfile=Boolean(profileEl)
  const handleProfileOpen=(event)=>{
    setprofileEl(event.currentTarget)
  }
  const handleProfileClose=()=>{
    setprofileEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { currUser } = useContext(UserContext);
  let isLoggedIn = false;
  let firstLetter="S"
  if (window.localStorage.getItem("token")) isLoggedIn = true;

  const [userData,setUserData]=useState({currentUSer:{name:"Swayam"}})

  useEffect(() => {
    if (pathname === "/login" || isLoggedIn) setDisplayLogin("none");
    else setDisplayLogin("inline");
    if (pathname === "/sign-up" || isLoggedIn) setDisplaySignup("none");
    else setDisplaySignup("inline");
    if(window.localStorage.getItem("token")) {
      isLoggedIn=true
      firstLetter = userData.currentUSer.name.charAt(0);
    }
    if(window.localStorage.getItem("userData")){
      setUserData(JSON.parse(window.localStorage.getItem("userData")))
    }
  }, [currUser, pathname, isLoggedIn]);

  

  const servicesStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  };

  const buttonScaleStyles = {
    "&:hover": {
      transform: "scale(1.1)",
    },
    transition: "0.3s",
  };

  const handleLogOut=(e)=>{
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userData')
    navigate("/")
  }

  return (
    <div>
      <nav>
        <section className="nav-section">
          <div className="nav_left">
            <img className="logo" src={fmlogo} alt="fetchmateLogo"></img>
            <div className="nav_links">
              <a href="/">Home</a>
              <a href="/parent">Pet Parent</a>
              <a href="/pet-lover">Pet lover</a>
              <span aria-describedby={id} onClick={handleClick}>
                Service
              </span>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: "100", left: 800 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    height: "7rem",
                    width: "40rem",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {/* sitter modal */}
                  <Petsitterform
                    visible={showsitterModal}
                    showsitterModal={showsitterModal}
                    setsitterShowModal={setsitterShowModal}
                  />

                  <a
                    href={Petsitterform}
                    style={servicesStyles}
                    onClick={() => setsitterShowModal(true)}
                  >
                    <BookOnlineIcon fontSize="large" sx={{color: '#006B5E', ":hover":{color: '#F7D65A', transform: 'rotate(35deg)', transition: 'all 0.15s ease-in-out'}}} />
                    Book Pet Sitter
                  </a>

                  {/* Tracker modal */}

                  <AddTrackerModal
                    visible={showModal}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />

                  <a
                    href={AddTrackerModal}
                    style={servicesStyles}
                    onClick={() => setShowModal(true)}
                  >
                    <ShareLocationIcon fontSize="large" sx={{color: '#006B5E', ":hover":{color: '#F7D65A', transform: 'rotate(35deg)', transition: 'all 0.15s ease-in-out'}}} />
                    Order A Tracker
                  </a>

                  {/* Payment modal */}
                  <PaymentModal
                    visible={showpaymentModal}
                    showpaymentModal={showpaymentModal}
                    setpaymentShowModal={setpaymentShowModal}
                  />
                  <a
                    href={PaymentModal}
                    style={servicesStyles}
                    onClick={() => setpaymentShowModal(true)}
                  >
                    <PaidIcon fontSize="large" sx={{color: '#006B5E', ":hover":{color: '#F7D65A', transform: 'rotate(35deg)', transition: 'all 0.15s ease-in-out'}}} />
                    Payment
                  </a>
                </Stack>
              </Popover>
              <a href="/about-us/def">About us</a>
            </div>
          </div>
          <div className="nav_right">
            <input
              className="Search_bar"
              type="search"
              placeholder="Search"
              readOnly
              onClick={(e)=>navigate('/near-by-pet-sitters')}
            ></input>
            <Stack spacing={2} direction={"row"}>
              <Button
                style={{ display: displaySignup }}
                href="/sign-up"
                className="Home_btns"
                variant="outlined"
                size="small"
                sx={buttonScaleStyles}
              >
                Sign up
              </Button>

              <Button
                style={{ display: displayLogin }}
                href="/login"
                className="Home_btns"
                variant="outlined"
                size="small"
                sx={buttonScaleStyles}
              >
                Login
              </Button>
            
              {isLoggedIn ? (
                <>
                  <Button
                    id="basic-button"
                    aria-controls={openProfile ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleProfileOpen}
                  >
                    <Avatar
                      sx={{
                        "&:hover": {
                          border: "3px solid black",
                          transform: "scale(1.3)",
                          transition: "0.2s",
                        },
                      }}
                    >{firstLetter = userData.currentUSer.name.charAt(0)}
                      {firstLetter}
                    </Avatar>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={profileEl}
                    open={openProfile}
                    onClose={handleProfileClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={(e)=>navigate("/CheckRequest")}>Check Request</MenuItem>
                    {}
                  </Menu>
                </>
              ) : null}
            </Stack>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
