// import logo from "../img/LOGO.svg";
import logo from "../img/LOGO.svg";
import face from "../img/Facebook.png";
import twi from "../img/Twitter.png";
import ins from "../img/Instagram.png";
import lin from "../img/LinkedIn.png";
import you from "../img/YouTube.png";
import pin from "../img/Pinterest.png";


const Footer = () => {
    return ( 
        <footer>
        <div className="footer-con">
            <div className="footer-logo-con">
                <img src={logo} alt="" />
                <ul>
                    <li>Product by Rethink Media UG</li>
                    <li>Boon, Germany.</li>
                </ul>
            </div>
            <div className="early-con">
                <ul>
                    <li>Get Early Access</li>
                    <li>Provide Feedback</li>
                </ul>
            </div>
            <div className="social-icons">
                <h4>Connect with Us</h4>
                <ul>
                    <li><img src={face} alt="Facebook logo" /></li>
                    <li><img src={twi} alt="Twitter logo" /></li>
                    <li><img src={ins} alt="Instagram logo" /></li>
                    <li><img src={lin} alt="Linkedin logo" /></li>
                    <li><img src={you} alt="YouTube logo" /></li>
                    <li><img src={pin} alt="Pinterest Logo" /></li>
                </ul>
            </div>
        </div>
        <div className="copy-con">
            <div className="copy-children-con">
                <p>Copy &copy; 2021 Rethink</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                </ul>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;