import "./Nav.css";
import fmlogo from '../../Image/logo-color.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { fontSize, Stack } from "@mui/system";
import { useState , useEffect} from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <section>
          <div className="nav_left">
            <img className="logo" src={fmlogo} alt="fetchmateLogo"></img>
            <div className="nav_links">
              <a href="">Home</a>
              <a href="">Pet Parent</a>
              <a href="">Pet lover</a>
              <a href="">Service</a>
              <a href="">About us</a>
            </div>
          </div>
          <div className="nav_right">
            {/* <SearchIcon fontSize="medium" /> */}
            <input
              className="Search_bar"
              type="search"
              placeholder="Search" 
            ></input>
            <Stack spacing={2} direction={"row"}>
              <Button className="Home_btns" variant="contained" size="small">
                Sign up
              </Button>
              <Button className="Home_btns" variant="outlined" size="small">
                Login
              </Button>
            </Stack>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Nav;