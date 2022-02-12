
import { checkIsSelected } from "./Helpers";
import ProductsCard from "./ProductsCard";
import { Product } from "./types";


type Props = {
    products:Product[];
    selectedProducts:Product[];
    onSelectProduct: (product:Product) => void;

}

function ProductsList({products,selectedProducts,onSelectProduct}:Props){

    return(
        <div className="Carrinhos-list-container">
            <div className="Carrinhos-list-items">

                {products.map(product =>( 

                <ProductsCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}/>

                ))}

                
               
              
            </div>
        </div>


    )


}

export default ProductsList;