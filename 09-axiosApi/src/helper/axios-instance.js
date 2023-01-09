import axios from "axios"

const axiosInstace = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export default axiosInstace