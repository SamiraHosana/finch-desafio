
import { formatPrice } from "./Helpers";
import { Product } from "./types";


type Props ={
    product:Product;
    onSelectProduct: (product:Product) => void;
    isSelected: boolean;

}


function ProductsCard({product, onSelectProduct, isSelected}:Props){

    return(
        <div className={`Carrinho-card-container ${isSelected ? "selected" : ''}` }
            onClick={() => onSelectProduct(product)}
        >
            <h3 className="Carrinho-card-title">
               {product.nome}
            </h3>
            <img src={product.imageUri}
             alt={product.nome}
             className="Carrinho-card-image"/>

            <h3 className="Carrinho-card-price">
                 {formatPrice(product.preco)}
            </h3>
            <div className="Carrinho-card-description">
                <h3>DESCRIÇÃO</h3>
                <p>{product.descricao}</p>
            </div>

        </div>


    )


}

export default ProductsCard;