
import logo from "../img/LOGO.svg";
import React, { useState, useEffect } from "react";



const Header = () => {
    // the mobileone
    const [show, setShow] = useState({
        display:"none"
    })
    const [hideTheIcon, setHideTheIcon] = useState()

    function toShow(){
        setShow({
            display:"block"
        })
        setHideTheIcon({
            display:"none"
        })
    }
    function closeTheMobileMenu(){
        setShow({
            display:"none"
        })
        setHideTheIcon({
            display:"block"
        })
    }
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", () => handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    return ( 
        <nav className={isSticky ? "sticky" : ""}>
            <div className="nav-elements">
            <div className="logo-con"><img src={logo} alt="" /></div>
                <div className="nav-ul-btn-con">
                    <ul>
                        <li> <a href="#home" >Home</a></li>
                        <li> <a href="#video">Video</a></li>
                        <li> <a href="#process">Process</a></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                    <button>Get started</button>
                </div>
                <div className="mobile-icon" style={hideTheIcon} onClick={toShow}>
                <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="mobile-one" style={show}>
                <div className="close-icon" onClick={closeTheMobileMenu}>
                <i class="fa-solid fa-xmark"></i>
                </div>
            <ul>
                        <li> <a href="#home" onClick={closeTheMobileMenu}>Home</a></li>
                        <li> <a href="#video" onClick={closeTheMobileMenu}>Video</a></li>
                        <li> <a href="#process" onClick={closeTheMobileMenu}>Process</a></li>
                        <li><a href="#services" onClick={closeTheMobileMenu}>Services</a></li>
                    </ul>
            </div>
        </nav>
     );
}
 
export default Header;