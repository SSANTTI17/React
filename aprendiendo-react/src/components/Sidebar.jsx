import React from "react";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar(){
    return (
      <aside className="sidebar">
        <div className="profile">
          <img
            src="https://via.placeholder.com/1"
            alt="Perfil"
            className="avatar"
          />
          <h3>Nombre Apellido</h3>
          <p>Texto vario</p>
        </div>
        <nav classname="menu">
          <SidebarButton
            classname="menuButton"
            text="Profile"
            icon={<AccountCircleIcon />}
            active="active"
          />
          <SidebarButton
            text="Dashboard"
            icon={<DashboardIcon />}
            active="active"
          />
          <SidebarButton text="Manage Team" icon={<PeopleIcon />} active="" />
          <SidebarButton
            text="Contacts"
            icon={<ContactsIcon />}
            active="active"
          />
          <SidebarButton
            text="Invoices"
            icon={<ReceiptLongIcon />}
            active="active"
          />
        </nav>
      </aside>
    );
}