
import NavBar from "./NavBar"


const Header = ({ cart, msg,isEmpty,value,onChange }) => {
   
    return (
        <header>
            <h1>Cardápio</h1>
            <h2>Conheça nossos pratos!</h2>

            <NavBar cart={cart} msg={msg} isEmpty={isEmpty} value={value} onChange={onChange} />

        </header>
    )
}

export default Header