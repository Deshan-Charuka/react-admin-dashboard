import axios from "axios";

const ITEM = "items";
const BASE_API_URL = "http://localhost:8080";
const ITEM_API_URL = `${BASE_API_URL}/api/v1/${ITEM}`;

class ItemDataService {
  async retrieveAllItems() {
    const result = await axios.get(`${ITEM_API_URL}`);
    return result;
  }
  deleteItem(id) {
    return axios.delete(`${ITEM_API_URL}/${id}`);
  }

  updateItem(item){
    return axios.put(`${ITEM_API_URL}/${item.supId}`,item)
  }

}

export default new ItemDataService();
