import axios from "axios";
import http from "./../http-common";

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

  updateSupplier(supplier){
    return axios.put(`${SUPPLIER_API_URL}/${supplier.supId}`,supplier)
  }

  uploadImage(file, onUploadProgress){
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/imageUploader",formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
}

export default new SupplierDataService();
