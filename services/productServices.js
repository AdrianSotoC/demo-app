import axios from "axios"

const URL_ROOT = (`http://localshost:4000/api/products`)

const getProductsServices = async () => {
    const response = await axios.get(`${URL_ROOT}`)
    return response;
}

const getProductService = () => {
    const response = axios.get(`${URL_ROOT}/${id}`)
    return response
}

export { getProductService, getProductsServices }