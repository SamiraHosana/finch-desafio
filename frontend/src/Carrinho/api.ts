import axios from "axios";
import { CarrinhoPayload } from "./types";

const API_URL = "http://localhost:8081"

export function fetchProducts(){
    return axios(`${API_URL}/produto`)
}

export function saveCarrinho(payload:CarrinhoPayload){
    console.log(payload)
    return axios.post(`${API_URL}/carrinho`, payload)
}