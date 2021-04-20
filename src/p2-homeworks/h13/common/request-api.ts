import axios from "axios";

export const instance = axios.create(
    {
        baseURL : 'https://neko-cafe-back.herokuapp.com/auth/test'
    }
)

export const requestsApi = {
    postRequest: (success: boolean) => {
        return instance.post(``,{success})
            .then(res => res.data.errorText)
            .catch(error => error.response.data.errorText)
    }
}
