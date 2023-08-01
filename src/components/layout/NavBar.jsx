import { SlBasket,SlBasketLoaded} from 'react-icons/sl'


const NavBar = ({value,onChange,msg,cart,isEmpty}) => {

    return (
        <nav>
            <input type="text" name="search" id="search" placeholder='Buscar' onChange={onChange}  value={value}/>
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