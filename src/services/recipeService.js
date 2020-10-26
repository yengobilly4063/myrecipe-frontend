import http from "../services/httpService"
import config from "../config.json"


export function getRecipes (){
    return  http.get(`${config.apiEndPoint}/recipes/`)
}

export function getRecipesById (id){
    return  http.get(`${config.apiEndPoint}/recipes/${id}`)
}

export function updateRecipe (id, data){
    return  http.put(`${config.apiEndPoint}/recipes/${id}`, data)
}

export function saveRecipe (data){
    return  http.post(`${config.apiEndPoint}/recipes/`)
}




