import axios from "axios";

const SUPPLIER = "suppliers";
const BASE_API_URL = "http://localhost:8080";
const SUPPLIER_API_URL = `${BASE_API_URL}/api/v1/${SUPPLIER}`;

class SupplierDataService {
  async retrieveAllSuppliers() {
    const result = await axios.get(`${SUPPLIER_API_URL}`);
    return result;
  }
  deleteSupplier(id) {
    //console.log('executed service')
    return axios.delete(`${SUPPLIER_API_URL}/${id}`);
  }
}

export default new SupplierDataService();
