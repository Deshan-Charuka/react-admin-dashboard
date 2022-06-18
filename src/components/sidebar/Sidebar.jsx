import "./Sidebar.css";
import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* ToDo */}
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to={"/"} className="sideBarLink">
              <li className="sideBarListItem">
                <LineStyleIcon className="sideBarIcon" />
                Home
              </li>
            </Link>
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
            <Link to={"/users"} className="sideBarLink">
              <li className="sideBarListItem">
                <PersonOutlineIcon className="sideBarIcon" />
                Users
              </li>
            </Link>
            <li className="sideBarListItem">
              <StorefrontIcon className="sideBarIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <PriceCheckIcon className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChartIcon className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
          <Link to={"/orders"} className="sideBarLink">
              <li className="sideBarListItem">
                <LineStyleIcon className="sideBarIcon" />
                Orders
              </li>
            </Link>
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
