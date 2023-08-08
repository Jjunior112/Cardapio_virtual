import { SlBasket, SlBasketLoaded } from 'react-icons/sl'


const NavBar = ({ msg, cart, isEmpty,showAll,showType1,showType2,showType3,showType4 }) => {

    

    return (
        <nav>
            <div>
            <button className='menu all' onClick={showAll}>Todos</button>
                <button className='menu pizza' onClick={showType1}>Pizzas</button>
                <button className='menu sandwich' onClick={showType2}>Sanduíches</button>
                <button className='menu liquor' onClick={showType3}>Bebidas</button>
                <button className='menu dessert' onClick={showType4}>Sobremesas</button>
            </div>

            <div className='cartNav'>
                <p className={msg}>Adicionado com sucesso!</p>
                <button onClick={cart} className={isEmpty} >{
                    (isEmpty === 'emptyCart') ? (
                        <SlBasket />
                    ) : (
                        <SlBasketLoaded />
                    )

                }</button>
            </div>
        </nav>
    )
}

export default NavBar