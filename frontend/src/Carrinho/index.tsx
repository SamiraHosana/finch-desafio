import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import {  Product } from './types';
import { useEffect, useState } from 'react';
import { fetchProducts, saveCarrinho } from './api';
import CarrinhoSummary from './CarrinhoSummary';
import Footer from '../Footer';
import { checkIsSelected } from './Helpers';
import './styles.css';

function Carrinhos(){

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const totalPrice = selectedProducts.reduce((sum, item) => {
            return sum + item.preco;
    }, 0);


    useEffect(() => {

        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => toast.warning("Erro ao listar produto!"));
            
        

    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id,nome,preco,tipo }) => ({ id,nome,preco,tipo }));
        const payload = {
          
          produtos: productsIds
        }
      
        saveCarrinho(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }
      
      

    return(
        <>
            <div className="Carrinhos-container">
                <StepsHeader/>
                <ProductsList 
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                    />
                <CarrinhoSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
     


    )


}

export default Carrinhos;