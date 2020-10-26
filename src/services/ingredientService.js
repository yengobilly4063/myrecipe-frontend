import http from "../services/httpService"
import config from "../config.json"


export function getIngredients (){
    return  http.get(`${config.apiEndPoint}/ingredients`)
}

export function getIngredientsById(id) {
    return http.get(`${config.apiEndPoint}/ingredients/${id}`)
}

export function updateIngredient(id, data) {
    return http.put(`${config.apiEndPoint}/ingredients/${id}`, data )
}

export function createIngredient(data) {
    return http.post(`${config.apiEndPoint}/ingredients/`, data)
}

export function deleteIngredient(id){
    return http.delete(`${config.apiEndPoint}/ingredients/${id}`)
}


