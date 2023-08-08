import { FaFacebook,FaInstagram,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Cardápio Online</p>

      <div>
      <a href="https://www.facebook.com" title="link para pagina do facebook" target="blank_"><FaFacebook/></a>
      <a href="https://www.instagram.com" title="link para pagina do instagram" target="blank_"><FaInstagram/></a>
      <a href="https://web.whatsapp.com/" title="link para enviar msg no whatsapp" target="blank_"><FaWhatsapp/></a>
      

      </div>
    </footer>
  )
}

export default Footer