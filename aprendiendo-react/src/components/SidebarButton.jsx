import React from "react";
import "./SidebarButton.css";

export default function SidebarButton({ text, icon, active }) {
  return (
    <button className={`sidebar-button ${active ? "active" : ""}`}>
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
    </button>
  );
}
