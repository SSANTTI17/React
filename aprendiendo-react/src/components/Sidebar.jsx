import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Sidebar.css";

export default function Sidebar(){
  // const [isExpanded, setIsExpanded]=useState(false);
  const buttons = [
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Manage Team", icon: <PeopleIcon /> },
    { text: "Contacts", icon: <ContactsIcon /> },
    { text: "Invoices", icon: <ReceiptLongIcon /> },
  ];
  const [activeIndex, setActiveIndex] = useState(
    Number(localStorage.getItem("activeIndex")) || 0
  );
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar"></div>
        <h3>Apellido Nombre</h3>
        <p>Texto Adicional</p>
      </div>

      <nav className="menu">
        {buttons.map((btn, index) => (
          <SidebarButton
            key={index}
            text={btn.text}
            icon={btn.icon}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </nav>
    </aside>
  );
}