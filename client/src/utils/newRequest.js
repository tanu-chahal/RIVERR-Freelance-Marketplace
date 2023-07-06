import axios from 'axios'

const newRequest = axios.create({
    baseURL: "https://riverr-backend.netlify.app/api",
    withCredentials: true,
});

export default newRequest;