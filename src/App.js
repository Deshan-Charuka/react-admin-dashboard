import Topbar from "./components/topbar/Topbar";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import { Notifications } from "react-push-notification";
import Order from "./pages/Order/Order";
import CreateOrder from "./pages/Order/CreateOrder";

function App() {
  return (
    <Router>
      <Notifications />
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/create-order" element={<CreateOrder/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
