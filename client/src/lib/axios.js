import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://mern-stack-chat-app-server.onrender.com/api",
    withCredentials: true,
})