import { SlBasket,SlBasketLoaded} from 'react-icons/sl'


const NavBar = ({msg,cart,isEmpty}) => {

    return (
        <nav>
            <p className={msg}>Adicionado com sucesso!</p>
            <button onClick={cart} className={isEmpty} >{ 
            (isEmpty==='emptyCart')?(
            <SlBasket />
            ):(
                <SlBasketLoaded/>
            )

            }</button>
        </nav>
    )
}

export default NavBar