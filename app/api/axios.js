import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_WP_API_URL
});

export default api;
