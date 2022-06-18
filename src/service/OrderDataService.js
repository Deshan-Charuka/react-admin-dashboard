import axios from "axios";
import http from "./../http-common";

const ORDER = "orders";
const BASE_API_URL = "http://localhost:8080";
const ORDER_API_URL = `${BASE_API_URL}/api/v1/${ORDER}`;

class OrderDataService {
  async retrieveAllOrders() {
    const result = await axios.get(`${ORDER_API_URL}`);
    return result;
  }
  deleteOrder(id) {
    return axios.delete(`${ORDER_API_URL}/${id}`);
  }

  updateOrder(order){
    return axios.put(`${ORDER_API_URL}/${order.supId}`,order)
  }

}

export default new OrderDataService();
