import { GiBasket } from 'react-icons/gi'
import { Link } from 'react-router-dom'



const NavBar = () => {




    return (
        <nav>

            <div>
                <Link to='/'>Cardapio</Link>
            </div>
            <Link to='/cart'> <GiBasket /></Link>
        </nav>
    )
}

export default NavBar