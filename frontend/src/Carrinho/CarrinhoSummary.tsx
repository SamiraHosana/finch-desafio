import { formatPrice } from "./Helpers";

type Props ={
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function CarrinhoSummary({amount, totalPrice, onSubmit}:Props){
    return(
        <div className="Carrinho-summary-container">
            <div className="Carrinho-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="Carrinho-summary-total">
                    <strong className="amount-selected"> {formatPrice( totalPrice)}</strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button 
                    className="Carrinho-summary-make-Carrinho"
                    onClick={onSubmit}
                    >

ADICIONAR AO CARRINHO
                </button>
            </div>
        </div>
    )
}

export default CarrinhoSummary;