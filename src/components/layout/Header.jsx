import NavBar from "./NavBar"


const Header = ({ cart,msg }) => {
    return (
        <header>
            <h1>Pizzaria ABC</h1>
            <p>Cardápio Online</p>

            <NavBar cart={cart} msg={msg} />

        </header>
    )
}

export default Header