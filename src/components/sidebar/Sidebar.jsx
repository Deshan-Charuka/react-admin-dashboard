import "./Sidebar.css";
import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* ToDo */}
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyleIcon className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyleIcon className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyleIcon className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
