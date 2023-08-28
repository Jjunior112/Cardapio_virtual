import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { SlBasket, SlBasketLoaded } from 'react-icons/sl'
import { FaPizzaSlice } from 'react-icons/fa'
import { GiHamburger, GiCakeSlice } from 'react-icons/gi'
import { MdLiquor } from 'react-icons/md'


const NavBar = ({ msg, cart, isEmpty, showAll, showType1, showType2, showType3, showType4 }) => {

    const [isOpen, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState('hideMenu')
    const hamburger = () => {
        if (isOpen) {
            setShowMenu('hideMenu');
        }
        else {
            setShowMenu('hamburger-mobile')
        }
    }


    return (
        <nav>
            <div>
                <div className='hamburger-desktop'>
                    <button className='menu all' onClick={showAll}>Todos</button>
                    <button className='menu pizza' onClick={showType1}><FaPizzaSlice /></button>
                    <button className='menu sandwich' onClick={showType2}><GiHamburger /></button>
                    <button className='menu liquor' onClick={showType3}><MdLiquor /></button>
                    <button className='menu dessert' onClick={showType4}><GiCakeSlice /></button>
                </div>
                <div className='hamburger' >
                    <Hamburger toggled={isOpen} toggle={setOpen} onToggle={hamburger} color='#910C00' aria-label='botao para filtrar os itens por categoria' />
                </div>

                <div className={showMenu}>

                    <button className='menu all' onClick={showAll}>Todos</button>
                    <button className='menu pizza' onClick={showType1}><FaPizzaSlice /></button>
                    <button className='menu sandwich' onClick={showType2}><GiHamburger /></button>
                    <button className='menu liquor' onClick={showType3}><MdLiquor /></button>
                    <button className='menu dessert' onClick={showType4}><GiCakeSlice /></button>
                </div>
            </div>

            <div className='cartNav'>
                <p className={msg}>Adicionado com sucesso!</p>
                <button onClick={cart} className={isEmpty} aria-label='botao para acessar o carrinho de compras' >{
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