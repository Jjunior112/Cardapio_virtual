import CardCardapio from "../layout/CardCardapio"

const Sandwichs = () => {
  const sandwichs = [
    { nome: 'Sanduíche de Queijo', 
    desc: 'Lanche completo com hambúrguer, queijo, bacon, salada e molho', 
    img: 'sanduiche.jpg', alt: 'pizza de clabresa',
    preco: 18.00,
  },

    {
      nome: "Sanduíche de Frango",
      img: "frango.jpg",
      alt: "Sanduíche de Frango",
      desc: "Sanduíche de frango grelhado com alface, tomate e maionese.",
      preco: 16.00,
    },
    {
      nome: "Sanduíche Vegetariano",
      img: "vegetariano.jpg",
      alt: "Sanduíche Vegetariano",
      desc: "Opção vegetariana com alface, tomate, queijo e molho especial.",
      preco: 14.00,
    },
    {
      nome: "Sanduíche de Carne Desfiada",
      img: "carne_desfiada.jpg",
      alt: "Sanduíche de Carne Desfiada",
      desc: "Sanduíche com carne bovina desfiada, cebola e molho barbecue.",
      preco: 15.00,
    },
    {
      nome: "Sanduíche de Atum",
      img: "atum.jpg",
      alt: "Sanduíche de Atum",
      desc: "Sanduíche recheado com atum, milho, maionese e alface.",
      preco: 19.00,
    },
  ]
  return (
    <main>
      {
        sandwichs.map((item, index) => (
          <div key={index}>
            <CardCardapio nome={item.nome} img={item.img} alt={item.alt} desc={item.desc} preco={item.preco} />
          </div>
        ))
      }

    </main>
  )
}

export default Sandwichs