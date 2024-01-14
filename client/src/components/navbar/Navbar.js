import React, { useState, useEffect } from "react";
import "./Navbar.css";
import SidebarButton from "./sidebarbutton.js";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="sidebar-container">
   
      
        <SidebarButton title="Home" to="/" icon={<MdSpaceDashboard />} />
    
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Search"
          to="/search"
          icon={<FaSearch />}
        />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
    
      <SidebarButton title="Login" to="/login" icon={<FaSignInAlt />} />
    </div>
  );
}