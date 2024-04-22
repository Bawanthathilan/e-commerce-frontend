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