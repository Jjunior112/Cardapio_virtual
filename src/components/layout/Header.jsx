
import NavBar from "./NavBar"


const Header = ({ cart, msg,isEmpty }) => {
   
    return (
        <header>
            <h1>Cardápio</h1>
            <h2>Conheça nossos pratos!</h2>

            <NavBar cart={cart} msg={msg} isEmpty={isEmpty} />

        </header>
    )
}

export default Header