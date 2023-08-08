
import NavBar from "./NavBar"


const Header = ({ cart, msg,isEmpty,showAll,showType1,showType2,showType3,showType4 }) => {
   
    return (
        <header>
            <h1>Cardápio</h1>
            <h2>Conheça nossos pratos!</h2>

            <NavBar cart={cart} msg={msg} isEmpty={isEmpty} showAll={showAll} showType1={showType1} showType2={showType2} showType3={showType3} showType4={showType4}/>

        </header>
    )
}

export default Header