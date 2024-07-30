import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2} from "react-icons/bs";
import { HiOutlineBars3} from "react-icons/hi2";
import {
Box,
Drawer,
ListItem,
ListItemButton,
ListItemIcon, 
ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/Shopping CartRounded";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions=[
        {
            test:"home",
            icon:<homeIcon/>
        },
        {
            test:"About",
            icon:<InfoIcon/>
        },
        {
            test:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            test:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            test:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
        
    
    ];


return <nav>
<div className="nav-logo-container">
<img src={Logo} alt="" />
</div>
<div className="navbar-links-container">
<a href="">Home</a>
<a href="">About</a>
<a href="">Testimonials</a>
<a href="">Contact</a>
<a href="">
www <BsCart2 className="navbar-cart-icon" />
</a>
<button className="primary-button">Bookings Now</button>
</ div>
<div className="navbar-menu-container">
< HiOutlineBars3 onClick={() => setOpenMenu (true)} />
</div>
</nav>
  
};

export default Navbar
