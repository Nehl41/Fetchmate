import "./Nav.css";
import fmlogo from "../../Image/logo-color.png";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [displaySignup, setDisplaySignup] = useState("inline");

  const [displayLogin, setDisplayLogin] = useState("inline");

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    if (pathname == "/login") setDisplayLogin("none");
    else setDisplayLogin("inline");
    if (pathname == "/sign-up") setDisplaySignup("none");
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
              <a href="">Pet Parent</a>
              <a href="">Pet lover</a>
              <a href="">Service</a>
              <a href="">About us</a>
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
            </Stack>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
