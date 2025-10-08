import React from "react";
import "./SidebarButton.css";

export default function SidebarButton({ text, icon, active, onClick }) {
  return (
    <button
      className={`sidebar-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </button>
  );
}
