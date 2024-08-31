import axios from 'axios'

const api =  axios.create({
    baseURL: "https://api-gdsc-main.vercel.app/api/v1/user",
})

export default api;