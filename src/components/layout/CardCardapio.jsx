
import { GiBasket } from "react-icons/gi";

const CardCardapio = ({ nome, img, alt, desc, preco,count,increment,decrement,handleAddCart }) => {
   
    



    return (
        <div className="cardCardapio">
            <h3>{nome}</h3>
            <img src={img} alt={alt} />
            <p>{desc}</p>
            <h4>R$ {preco}</h4>
            <div className="add">
                <div className="count">
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>

                <p>R$ {preco * count}</p>

                <button onClick={handleAddCart}><GiBasket /></button>

            </div>

        </div>
    )
}

export default CardCardapio