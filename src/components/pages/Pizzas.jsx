import CardCardapio from "../layout/CardCardapio";

const Pizzas = () => {
  const pizzas = [
    { 
      nome: 'Pizza de Calabresa', 
      desc: 'Calabresa, queijo derretido, molho tomate, massa fina e crocante.', 
      img: 'pizza-calabresa.jpg', 
      alt: 'pizza de clabresa', 
      preco: 50.00,
    },

    {
      nome: "Pizza Quatro Queijos",
      img: "quatro_queijos.jpg",
      alt: "Pizza Quatro Queijos",
      desc: "Uma deliciosa combinação de quatro queijos derretidos sobre a massa.",
      preco: 58.00,
    },

    {
      nome: "Pizza de Frango com Catupiry",
      img: "frango_catupiry.jpg",
      alt: "Pizza de Frango com Catupiry",
      desc: "Pizza de frango desfiado com catupiry cremoso.",
      preco: 53.00,
    },

    {
      nome: "Pizza Margherita",
      img: "margherita.jpg",
      alt: "Pizza Margherita",
      desc: "Clássica pizza Margherita com tomate, queijo mozarela e manjericão.",
      preco: 64.00,
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

    </main>
  )
}

export default Pizzas