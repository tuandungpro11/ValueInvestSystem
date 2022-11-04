import axios from "axios"

const BASE_URL:string = 'https://svr6.fireant.vn/api/Data/Finance'

export const httpRequest = axios.create({
    baseURL: BASE_URL,
})