import axios from 'axios'

const website = "prod"

export const axiosInstance = axios.create({
    baseURL: website === "prod" ? "https://mern-stack-chat-app-server.onrender.com/api" : "http://localhost:5000/api",
    withCredentials: true,
})