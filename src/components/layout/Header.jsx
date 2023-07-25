import NavBar from "./NavBar"


const Header = ({cart}) => {
    return (
        <header>
            <h1>Pizzaria ABC</h1>
            <p>Cardápio Online</p>
            <NavBar cart={cart} />
        </header>
    )
}

export default Header