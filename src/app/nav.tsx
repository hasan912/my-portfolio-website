import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";

export const Nav = () => {
    return (
      <header>
        <div className="container">
          <nav className="nav d-flex" id="home">
            <div className="logo">
              <a href="#">
                <Image src="/logo.png"  alt="logo" width={190} height={60} className="logo-main" />
              </a>
            </div>
            <div className="navigation-bar">
              <ul id="nav">
                <li className="active">
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#services">services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  

 export const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="footer-inner">
              <a className="footer-logo">
                <Image src="/logo.png"  width={250} height={80}  alt="Footer logo" />
              </a>
            <div className="footer-nav">
              <ul>
                <li className="f-navlinks"><a href="">Home</a></li>
                <li className="f-navlinks"><a href="">About</a></li>
                <li className="f-navlinks"><a href="">Service</a></li>
                <li className="f-navlinks"><a href="">Portfolio</a></li>
                <li className="f-navlinks"><a href="">Contact</a></li>
              </ul>
            </div>
            <div className="footer-bottom d-flex">
              <p className="copyright">Muhammad Hasan Baig © Copyright 2023. All Right Reserved.</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/muhammed_hasan_baig/" className="footer-social"><Image src="/feather_instagram.svg" width={30} height={30} alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/muhammadhasanbaig/" className="footer-social"><Image src="/feather_linkedin.svg" width={30} height={30} alt="linkedin" /></a>
                <a href="https://github.com/hasan912" className="footer-social"><Image src="/feather_github.svg" width={30} height={30} alt="github" /></a>
                <a href="https://dribbble.com/m_hasan_baig" className="footer-social"><Image src="/feather_dribbble.svg" width={30} height={30} alt="Dribble" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  


 