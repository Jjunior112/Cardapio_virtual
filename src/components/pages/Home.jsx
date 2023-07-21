import CardCardapio from "../layout/CardCardapio"
import Cart from "./Cart"

const Home = () => {
  const pizzas = [

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
  ]
  const sandwichs = [
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
    },]
  const liquors = [
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
    },]
  const desserts = [
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

  return (
    <main>

      {
        pizzas.map((item, index) => (
          <div key={index}>
            <CardCardapio nome={item.nome} img={item.img} alt={item.alt} desc={item.desc} preco={item.preco} />
          </div>
        ))
      }
      {
        sandwichs.map((item, index) => (
          <div key={index}>
            <CardCardapio nome={item.nome} img={item.img} alt={item.alt} desc={item.desc} preco={item.preco} />
          </div>
        ))
      }
      {
        liquors.map((item, index) => (
          <div key={index}>
            <CardCardapio nome={item.nome} img={item.img} alt={item.alt} desc={item.desc} preco={item.preco} />
          </div>
        ))
      }

      {
        desserts.map((item, index) => (
          <div key={index}>
            <CardCardapio nome={item.nome} img={item.img} alt={item.alt} desc={item.desc} preco={item.preco} />
          </div>
        ))
      }



    </main>
  )
}

export default Home