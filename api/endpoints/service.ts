import apiInstance from "../services";
import ApiConstants from "../services/apiConstants";


export const login = async (data:any)=>{
    try {
        return Promise.resolve(
            await apiInstance.post(ApiConstants.LOGIN , data)
        )
    } catch (error) {
        return Promise.reject(error);
    }
}

// get all products
export const getAllProducts = async ()=>{
    try {
        return Promise.resolve(
            await apiInstance.get(ApiConstants.LIST_ALL_PRODUCTS)
        )
    } catch (error) {
        return Promise.reject(error);
    }
}

//cart
export const addToCart = async (data:any)=>{
    try {
        return Promise.resolve(
            await apiInstance.post(ApiConstants.CART , data)
        )
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getCart = async ()=>{
    try {
        return Promise.resolve(
            await apiInstance.get(ApiConstants.CART)
        )
    } catch (error) {
        return Promise.reject(error);
    }
}
