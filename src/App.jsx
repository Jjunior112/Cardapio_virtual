import './App.css'

import CardCardapio from "./components/layout/CardCardapio"
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { useState, useEffect } from 'react';

import { GiTrashCan } from "react-icons/gi";


function App() {
  const itens = [

    {
      id: 1,
      nome: 'Pizza de Calabresa',
      desc: 'Calabresa, queijo derretido, molho tomate, massa fina e crocante.',
      img: 'pizza-calabresa.jpg',
      alt: 'pizza de clabresa',
      preco: 50.00,
    },

    {
      id: 2,
      nome: "Pizza Quatro Queijos",
      img: "quatro_queijos.jpg",
      alt: "Pizza Quatro Queijos",
      desc: "Uma deliciosa combinação de quatro queijos derretidos sobre a massa.",
      preco: 58.00,
    },

    {
      id: 3,
      nome: "Pizza de Frango com Catupiry",
      img: "frango_catupiry.jpg",
      alt: "Pizza de Frango com Catupiry",
      desc: "Pizza de frango desfiado com catupiry cremoso.",
      preco: 53.00,
    },

    {
      id: 4,
      nome: "Pizza Margherita",
      img: "margherita.jpg",
      alt: "Pizza Margherita",
      desc: "Clássica pizza Margherita com tomate, queijo mozarela e manjericão.",
      preco: 64.00,
    },
    {
      id: 5,
      nome: 'Sanduíche de Queijo',
      desc: 'Lanche completo com hambúrguer, queijo, bacon, salada e molho',
      img: 'sanduiche.jpg', alt: 'pizza de clabresa',
      preco: 18.00,
    },

    {
      id: 6,
      nome: "Sanduíche de Frango",
      img: "frango.jpg",
      alt: "Sanduíche de Frango",
      desc: "Sanduíche de frango grelhado com alface, tomate e maionese.",
      preco: 16.00,
    },
    {
      id: 7,
      nome: "Sanduíche Vegetariano",
      img: "vegetariano.jpg",
      alt: "Sanduíche Vegetariano",
      desc: "Opção vegetariana com alface, tomate, queijo e molho especial.",
      preco: 14.00,
    },
    {
      id: 8,
      nome: "Sanduíche de Carne Desfiada",
      img: "carne_desfiada.jpg",
      alt: "Sanduíche de Carne Desfiada",
      desc: "Sanduíche com carne bovina desfiada, cebola e molho barbecue.",
      preco: 15.00,
    },
    {
      id: 9,
      nome: "Sanduíche de Atum",
      img: "atum.jpg",
      alt: "Sanduíche de Atum",
      desc: "Sanduíche recheado com atum, milho, maionese e alface.",
      preco: 19.00,
    },
    {
      id: 10,
      nome: "Coca Cola 2l",
      img: "refrigerante.jpg",
      alt: "Refrigerante",
      desc: "Diversos sabores de refrigerante para acompanhar sua refeição.",
      preco: 10.00,
    },
    {
      id: 11,
      nome: "Coca Cola 600ml",
      img: "refrigerante.jpg",
      alt: "Refrigerante",
      desc: "Diversos sabores de refrigerante para acompanhar sua refeição.",
      preco: 6.00,
    },
    {
      id: 12,
      nome: "Pepsi 2l",
      img: "refrigerante.jpg",
      alt: "Refrigerante",
      desc: "Diversos sabores de refrigerante para acompanhar sua refeição.",
      preco: 8.00,
    },
    {
      id: 13,
      nome: "Antartica 2l",
      img: "refrigerante.jpg",
      alt: "Refrigerante",
      desc: "Diversos sabores de refrigerante para acompanhar sua refeição.",
      preco: 7.00,
    },
    {
      id: 14,
      nome: "Coca Cola lata",
      img: "refrigerante.jpg",
      alt: "Refrigerante",
      desc: "Diversos sabores de refrigerante para acompanhar sua refeição.",
      preco: 5.00,
    },

    {
      id: 15,
      nome: "Suco Natural de Laranja",
      img: "suco.jpg",
      alt: "Suco Natural",
      desc: "Variedade de sucos naturais feitos na hora.",
      preco: 5.00,
    },
    {
      id: 16,
      nome: "Suco Natural de Manga",
      img: "suco.jpg",
      alt: "Suco Natural",
      desc: "Variedade de sucos naturais feitos na hora.",
      preco: 5.00,

    },
    {
      id: 17,
      nome: "Suco Natural de Pêssego",
      img: "suco.jpg",
      alt: "Suco Natural",
      desc: "Variedade de sucos naturais feitos na hora.",
      preco: 6.00,
    },
    {
      id: 18,
      nome: "Mousse de Chocolate",
      img: "mousse_chocolate.jpg",
      alt: "Mousse de Chocolate",
      desc: "Mousse de chocolate aerado e cremoso, uma explosão de sabor.",
      preco: 10.00,
    },
    {
      id: 19,
      nome: "Tiramisù",
      img: "tiramisu.jpg",
      alt: "Tiramisù",
      desc: "Clássica sobremesa italiana à base de café, queijo mascarpone e cacau.",
      preco: 10.00,
    },
    {
      id: 20,
      nome: "Pudim",
      img: "pudim.jpg",
      alt: "Pudim",
      desc: "Pudim de leite com calda de caramelo, uma tentação irresistível.",
      preco: 8.00,
    },

  ];

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartClass, setCartClass] = useState('cartHide');
  const [msg, setMsg] = useState('msgHide');


  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const cartShow = () => {
    if (cartClass === 'cartHide') {
      setCartClass('cart')
    }
    else {
      setCartClass('cartHide')
    }
  }
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Defina o valor a partir do qual você deseja que a navbar fique fixa.
      const stickyThreshold = 100;
      setIsNavSticky(scrollY > stickyThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const showMessageForSeconds = (seconds) => {
    setMsg('msgShow');
    setTimeout(() => {
      setMsg('msgHide');
    }, seconds * 1000);
  };
  const buy = () => {

    if (cart.length > 0) {

      const phoneNumber = '+5531982208900';
      const pedido = [];
      const qtde = []

      for (let i = 0; i < cart.length; i++) {
        pedido.push(cart[i].pedido);
        qtde.push(cart[i].qtde);

      }

      const message = 'Olá gostaria de pedir os seguintes itens:'
      //  const qtdes = 'nas respectivas quantidades:\n'  + qtde.join('\n')

      const msg = () => {
        const msgFinal = [];

        for (let i = 0; i < pedido.length; i++) {
          msgFinal.push(` ${qtde[i]} - ${pedido[i]}`)

        }
        return msgFinal
      }

      var msgFinal = msg()

      var msgWhats = message + '\n' + msgFinal



      const newMsg = msgWhats.split(',').join('\n')
      console.log(newMsg)

      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(newMsg)}`;

      window.open(url, '_blank');
    }
  }

  return (
    <>
      <div className={` ${isNavSticky ? 'sticky' : ''}`}>
        <Header cart={cartShow} msg={msg} />

        <div className={cartClass}>
          <div className='cartInfo'>
            <p>Pedido</p>
            <p>Preço</p>
            <p>Qtde</p>
            <p>Sub-total</p>

          </div>
          <div>

            {
              (cart.length > 0 ? (
                cart.map((item, index) => (

                  <div key={index} className='cartFinal'>
                    <p>{item.pedido}</p>
                    <p>R$ {item.preco},00</p>
                    <p>{item.qtde}</p>
                    <p>R$ {item.preco * item.qtde},00</p>

                    <button onClick={() => {

                      const newCart = [...cart]
                      const filteredCart = newCart.filter(cart => cart.id !== item.id ? cart : null)
                      setCart(filteredCart)

                    }

                    }><GiTrashCan /></button>

                  </div>
                )))
                : (
                  <div className="cartFinal">
                    <h3 className='empty'>O carrinho está vazio!</h3>
                  </div>
                ))

            }
            <div className="total">
              <p>Total</p>
              {
                cart.length > 0 && (
                  <p className='price'>R$ {cart[0].preco},00</p>
                )
              }
              <button onClick={buy}>Finalizar Pedido</button>
            </div>

          </div>
        </div>
      </div>

      <main>
        {
          itens.map((item, index) => (
            <div key={index}>

              <CardCardapio

                nome={item.nome}
                img={item.img}
                alt={item.alt}
                desc={item.desc}
                preco={item.preco}
                count={count}
                increment={increment}
                decrement={decrement}
                handleAddCart={
                  () => {
                    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

                    const newCart = [...cart,

                    { id: item.id, pedido: item.nome, preco: item.preco, qtde: count, }];


                    if (count > 0 && existingItem) {

                      setCart(cart.map((cartItem) =>
                        cartItem.id === item.id ?
                          { ...cartItem, qtde: cartItem.qtde + count } : cartItem
                      ));





                      setCount(0);

                      showMessageForSeconds(2)
                    }
                    if (count > 0 && !existingItem) {

                      setCart(newCart);

                      setCount(0);
                      console.log(cart)

                      showMessageForSeconds(2);

                    }



                  }} />


            </div>
          ))

        }


      </main>
      <Footer />
    </>
  )
}

export default App
