import { type } from "os";

export type Product = {

    id:number;
    nome:string;
    preco:number;
    descricao:string;
    imageUri:string;
    tipo:string;

}




type ProductId = {
    id: number;
    nome:string;
    preco:number;
    tipo:string;
}

export type CarrinhoPayload = {
    produtos: ProductId[];
} 