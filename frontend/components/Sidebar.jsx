import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Code Mentor AI</h2>
    

      <ul className="menu">
        <li className="active">Dashboard</li>
        <li>History</li>
        <li>Tutorials</li>
        <li>Playground</li>
        <li>Settings</li>
      </ul>

      <p className="version">Code Mentor AI v2.0</p>
    </div>
  );
}
