import axios from "axios"
import ApiConstants from "./apiConstants"
import { store } from "@/redux/store";

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
        const state = store.getState();
        const token = state.auth.token;

        if(token){
            config.headers.Authorization = token;
        }
        return config
    },
    function (error){
        return Promise.reject(error)
    }
);

export default apiInstance