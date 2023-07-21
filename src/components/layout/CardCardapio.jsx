import { GiBasket } from 'react-icons/gi'
import { Link } from "react-router-dom";


const CardCardapio = ({ nome, img, alt, desc, preco }) => {

   
    return (
        <div className="cardCardapio">
            <h3>{nome}</h3>
            <img src={img} alt={alt} />
            <p>{desc}</p>
            <h4>R$ {preco}</h4>
            <Link to='/cart'><GiBasket/></Link>
        </div>
    )
}

export default CardCardapio