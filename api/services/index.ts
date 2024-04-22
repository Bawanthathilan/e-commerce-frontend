import axios from "axios"
import ApiConstants from "./apiConstants"

const apiInstance = axios.create({
    baseURL: ApiConstants.BASE_URL,
    timeout:200000,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
        cache: "no-cache",
        mode: "cors",
        redirect: "follow",
        "x-user-agent": "test",
        referrer: "no-referrer",
      },
})

apiInstance.interceptors.request.use(
    async (config)=>{

        if(!config.headers['Authorization']){
            delete config.headers['Authorization']
        }
        return config
    },
    function (error){
        return Promise.reject(error)
    }
);

export default apiInstance