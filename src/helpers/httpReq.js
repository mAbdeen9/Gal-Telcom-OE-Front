import axios from "axios";
import { apiUrl } from "../config.json";

const httpRequest = async (method, endPoint, token = "", data = "") => {
  const response = await axios({
    method: method,
    url: `${apiUrl}${endPoint}`,
    headers: {
      authorization: token,
    },
    data: data,
  });

  return response;
};

export default httpRequest;
