import http from "../services/httpService"
import config from "../config.json"


export function getCategories (){
    return http.get(`${config.apiEndPoint}/categories`)
}

export function getCategoryById(id) {
    return http.get(`${config.apiEndPoint}/categories/${id}`)
}

export function createCategory(data) {
    return http.post(`${config.apiEndPoint}/categories/`, data)
}

export function deleteCategory(id){
    return http.delete(`${config.apiEndPoint}/categories/${id}`)
}


export function updateCategory(id, data){
    return http.put(`${config.apiEndPoint}/categories/${id}`, data)
}