import axios from "axios";
const baseUrl = "/api/users";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async (object) => {
  const response = await axios.post(baseUrl, object)
}

export default { getAll };
