import axios from "axios";

const CUSTOMER = "customers";
const BASE_API_URL = "http://localhost:8080";
const CUSTOMER_API_URL = `${BASE_API_URL}/api/v1/${CUSTOMER}`;

class CustomerDataService {
  async retrieveAllCustomers() {
    const result = await axios.get(`${CUSTOMER_API_URL}`);
    return result;
  }
  deleteCustomer(id) {
    return axios.delete(`${CUSTOMER_API_URL}/${id}`);
  }

  updateCustomer(customer) {
    return axios.put(`${CUSTOMER_API_URL}/${customer.supId}`, customer);
  }
}

export default new CustomerDataService();
