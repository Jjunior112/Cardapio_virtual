import { FaFacebook,FaInstagram,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Cardápio Online</p>

      <div>
      <a href="https://www.facebook.com" target="blank_"><FaFacebook/></a>
      <a href="https://www.instagram.com" target="blank_"><FaInstagram/></a>
      <a href="https://web.whatsapp.com/" target="blank_"><FaWhatsapp/></a>
      

      </div>
    </footer>
  )
}

export default Footer