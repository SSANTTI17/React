import React from "react";
import "./Sidebar.css";

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
                <button> Opcion 1 </button>
                <button> Opcion 2 </button>
                <button> Opcion 3 </button>
                <button> Opcion 4 </button>
                <button> Opcion 5 </button>
            </nav>
        </aside>
    );
}