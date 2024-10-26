import './Footer.css'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
    <div className="container navTab">
        <div className="footerAbout">
        <div className="footerLogo">
        Mexus
        </div>
        <div className="para font-poppins">
        A comprehensive healthcare app offering appointment booking, video consultations, AI assistance, and more for convenient and accessible medical care. 
            </div>
            <div className="footerSocial">
                <IoLogoFacebook />
                <IoLogoLinkedin />
                <IoLogoInstagram />
                <FaYoutube />
            </div>
        </div>





    </div>
    <div className="container footerLine">
        <div className="btm_links">
        <a href="">Terms & Conditions</a>
        <a href="">License</a>
        <a href="">Site Map</a>
        <a href="">Privacy</a>
        </div>
        <div className="btm_line">
        2024@Mexus</div>
    </div>

</div>
  )
}

export default Footer