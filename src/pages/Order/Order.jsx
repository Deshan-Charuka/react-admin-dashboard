import React, { Component } from "react";
import "./Order.css";
import { Link } from "react-router-dom";

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="orderTitleContainer">
          <h1 className="orderTitle">Place an Order</h1>
          <Link to="/create-order">
            <button className="orderAddButton">Create</button>
          </Link>
        </div>
      </div>
    );
  }
}
