import http from "../services/httpService"
import config from "../config.json"


export function createUser(data){
    return http.post(`${config.apiEndPoint}/users/`, data)
}

export function loginAuthUser(data){
    return http.post(`${config.apiEndPoint}/auth/`, data)
}
