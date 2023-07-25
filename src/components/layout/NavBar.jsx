import { GiBasket } from 'react-icons/gi'


const NavBar = ({cart}) => {




    return (
        <nav>
            
            <button onClick={cart} > <GiBasket /></button>
        </nav>
    )
}

export default NavBar