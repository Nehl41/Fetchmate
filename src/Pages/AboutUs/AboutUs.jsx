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
        sx={{ margin: "1rem", textAlign: "center" }}
        variant="h3"
        component="div"
      >
        Want to know more about us? Explore.....
      </Typography>
      {/* <Divider /> */}
      <div className="about-us-main">
        <div className="about-us-leftList">
          <List>
            <ListItem
              component={Link}
              to="/about-us/faqs"
              onClick={(e) => handleListOnClick(e, 1)}
            >
              <ListItemButton selected={selectedIndex === 1}>
                <Typography sx={{color:"#555152"}} component="div" variant="h4">
                  FaQs
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/about-us/developers"
              onClick={(e) => handleListOnClick(e, 2)}
            >
              <ListItemButton color="neutral" selected={selectedIndex === 2}>
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
              <ListItemButton color="neutral" selected={selectedIndex === 3}>
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
