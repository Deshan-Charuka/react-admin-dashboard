import React, { useEffect, useState } from "react";
import "./User.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import { Link } from "react-router-dom";
import UpdateForm from "./UpdateForm";


export default function User() {
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    setInitialValues(JSON.parse(localStorage.getItem("supplier")));
    localStorage.setItem('oldImgUrl',initialValues && initialValues.supImgUrl)
  });



  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={`${initialValues && initialValues.supImgUrl}`}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{initialValues && initialValues.supId}</span>
              <span className="userShowUserTitle">{initialValues && initialValues.supName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{initialValues && initialValues.supId}</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{initialValues && initialValues.supTelephone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{initialValues && initialValues.supAddress} | Sri Lanka</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <UpdateForm
            initialValues={initialValues && initialValues}
          />
        </div>
      </div>
    </div>
  );
}
