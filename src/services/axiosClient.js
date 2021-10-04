import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://testavm.vietbank.com.vn:9020/api"
});

export default axiosClient;
