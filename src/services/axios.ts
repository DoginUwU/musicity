import axios, { AxiosInstance } from 'axios';

let api: AxiosInstance | null = null;

const _initialize = () => { 
    api = axios.create({
        baseURL:
            "https://still-brushlands-24168.herokuapp.com/https://www.googleapis.com/youtube/v3/",
        headers: {
            "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62",
            "Accept-Language": "en-US,en;q=0.5",
            "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
        },
        params: {
            key: "AIzaSyBwIY8XJmIvPDPmFvbL_v9NCeqFuRLDkeI",
        },
    });
}

if (!api) _initialize();

export default api;