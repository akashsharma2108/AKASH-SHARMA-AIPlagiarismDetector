import axios, { AxiosInstance } from 'axios';



const API_URL = "";
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});
export default apiClient;
