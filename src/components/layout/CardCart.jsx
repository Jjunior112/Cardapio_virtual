import { useState } from "react";
import { GiBasket } from "react-icons/gi";


const CardCart = ({ nome, preco }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([{}]);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleAddCart = () => {
    if (count > 0) {
      const newCart = [...cart, {
        id: Math.floor(Math.random() * 10000),
        nome: nome,
        preco: preco,
        qtde: count,
        sub: count * preco
      }]
      setCart(newCart);

      console.log(cart);
      setCount(0)
    }
  }


  return (
    <div className="cardCart">
      <h4>{nome}</h4>
      <p>R$ {preco},00</p>
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

export default CardCart