import React, { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
const MyDrawer = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <List>
      <ListItem className="flex flex-col">
      <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="logo"
          className="w-12 sm:w-36"
        />
        <div className="navbarBottom flex flex-col mt-4  border-b-2  ">
          <NavLink to="/a">Her Products</NavLink>
          <NavLink to="/b">His Products</NavLink>
          <NavLink to="/c">Kiddo Product</NavLink>
          <NavLink to="/d">Her Product</NavLink>
          <NavLink to="/e">His Product</NavLink>
          <NavLink to="/f">Kiddo Product</NavLink>
        </div>
      </ListItem>
    </List>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor={`left`} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};
export default MyDrawer;
