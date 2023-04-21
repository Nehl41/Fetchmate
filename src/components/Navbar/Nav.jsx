import "./Nav.css";
import '../Modal/model.css';

import fmlogo from "../../assets/Image/logo-color.png";
import Button from "@mui/material/Button";
import Modal from "../Modal/Model"

import { Popover ,Stack,Item, Avatar} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const isLoggedIn=false;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    console.log(pathname);
    if (pathname == "/login" || isLoggedIn) setDisplayLogin("none");
    else setDisplayLogin("inline");
    if (pathname == "/sign-up" || isLoggedIn) setDisplaySignup("none");
    else setDisplaySignup("inline");
  }, []);

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
              <span aria-describedby={id} onClick={handleClick}>Service</span>
              <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorReference="anchorPosition"
  anchorPosition={{ top: "100", left: 800 }}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}>
              <Stack direction="row" spacing={2} sx={{height:"7rem",width:"40rem",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
              <a href="/book-pet-sitting">Book Pet Sitter</a>
              <a className="primayBtn" onClick={() => setIsOpen(true)}>Order A Tracker</a>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
              {/* <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>open</button> */}
              <a href="/book-pet-sitting">Payment</a>
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
                variant="contained"
                size="small"
              >
                Sign up
              </Button>

              <Button
                style={{ display: displayLogin }}
                href="/login"
                className="Home_btns"
                variant="outlined"
                size="small"
              >
                Login
              </Button>
              {isLoggedIn?<Avatar>H</Avatar>:<></>}
            </Stack>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
