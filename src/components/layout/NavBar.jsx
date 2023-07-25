import { GiBasket } from 'react-icons/gi'


const NavBar = ({cart,msg}) => {

    return (
        <nav>
            <p className={msg}>Adicionado com sucesso!</p>
            <button onClick={cart} > <GiBasket /></button>
        </nav>
    )
}

export default NavBar