import axios from 'axios'

export const TABLE_URL = "/api/";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 30000 // request timeout
});

export default service
