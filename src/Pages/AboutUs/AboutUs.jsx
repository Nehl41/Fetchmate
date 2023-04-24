import "./AboutUs.css";

import Loader from "../../components/Loader/Loader";

import { Outlet, Link } from "react-router-dom";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import { useEffect, useState } from "react";

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const [loading, setLoading] = useState(false);
  const [pageheading,setPageheading] = useState('Know Us')

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleListOnClick = (e, selected) => {
    setSelectedIndex(selected);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  return (
    <div className="about-us-wrapper">
      <Divider />
      <Typography
        sx={{ fontFamily: 'Exo' ,textAlign: "center", paddingTop: '0.7rem'}}
        variant="h3"
        component="div"
      >
        {pageheading}
      </Typography>

      {/* <Divider /> */}
      <div className="about-us-main">
        <div className="about-us-leftList">
          <List>
            <ListItem
              component={Link}
              to="/about-us/faqs"
              onClick={({e}) => handleListOnClick(e, 1)}
            >
              <ListItemButton selected={selectedIndex === 1} onClick={()=>{setPageheading("Frequently Asked question")}}>
                <Typography sx={{color:"#555152"}} component="div" variant="h4" >
                  FaQs
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/about-us/developers"
              onClick={(e) => handleListOnClick(e, 2)}
            >
              <ListItemButton color="neutral" selected={selectedIndex === 2} onClick={()=>{setPageheading("Know Our Developers")}}>
                <Typography component="div" sx={{color:"#555152"}} variant="h4">
                  Developers
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/about-us/def"
              onClick={(e) => handleListOnClick(e, 3)}
            >
              <ListItemButton color="neutral" selected={selectedIndex === 3} onClick={()=>{setPageheading("Our Goals")}}>
                <Typography sx={{color:"#555152"}} component="div" variant="h4">
                  Our Goal
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="about-us-main-content">
          {loading?<Loader/>:<Outlet />}
        </div>
      </div>
    </div>
  );
};
