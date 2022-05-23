import axios from "axios";

const token = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common = {'auth-token': token, 'Accept': 'application/json'}

export default axios;