import React from "react";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="profile">
                <img
                    src = "https://via.placeholder.com/80"
                    alt = "Perfil"
                    className = "avatar"
                />
                <h3>Nombre Apellido</h3>
                <p>Texto vario</p>
            </div>
            <nav classname="menu">
                {/* <button> Opcion 1 </button>
                <button> Opcion 2 </button>
                <button> Opcion 3 </button>
                <button> Opcion 4 </button>
                <button> Opcion 5 </button> */}
                <SidebarButton text="Dashboard" icon={<DashboardIcon/>} active/>
                <SidebarButton text="Manage Team" icon={<PeopleIcon/>}/>
                <SidebarButton text="Contacts" icon={<ContactsIcon/>}/>
                <SidebarButton text="Invoices" icon={<ReceiptLongIcon/>}/>
                <SidebarButton text="Profile" icon={<AccountCircleIcon/>}/>                
            </nav>
        </aside>
    );
}