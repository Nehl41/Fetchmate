import "./Nav.css";

import fmlogo from "../../assets/Image/logo-color.png";
import Button from "@mui/material/Button";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PaidIcon from "@mui/icons-material/Paid";
import AddTrackerModal from "../../components/Modal/ModalPage";

import { Popover, Stack, Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

const Nav = () => {

  const [showModal, setShowModal] = useState(false);

  const [displaySignup, setDisplaySignup] = useState("inline");

  const [displayLogin, setDisplayLogin] = useState("inline");

  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

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
  if (window.localStorage.getItem("token")) isLoggedIn = true;

  useEffect(() => {
    console.log(`Current User:${currUser}`);
    if (pathname === "/login" || isLoggedIn) setDisplayLogin("none");
    else setDisplayLogin("inline");
    if (pathname === "/sign-up" || isLoggedIn) setDisplaySignup("none");
    else setDisplaySignup("inline");
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
                  <a href="/book-pet-sitting" style={servicesStyles}>
                    {" "}
                    <BookOnlineIcon fontSize="large" />
                    Book Pet Sitter
                  </a>

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
                    <ShareLocationIcon fontSize="large" />
                    Order A Tracker
                  </a>
                  <a href="/book-pet-sitting" style={servicesStyles}>
                    <PaidIcon fontSize="large" />
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
              {isLoggedIn ? <Avatar>H</Avatar> : <></>}
            </Stack>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
