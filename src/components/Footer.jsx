import './style.css';
import Logo from "../images/logo.svg";

function Footer(){
    return(

        <>
            <section className="footer">
        <div className="container footer__container">
            <div className="company">
                <a className="logo__link" href="index.html"><img className="logo__img" src={Logo} width="67" height="67"  alt="kompany logo"/></a>
                <p className="company__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>

            <ul className="footer__list">
                <li className="footer__item">
                    <h3 className="footer__heading">
                        About
                    </h3>
                    <a className="footer__link" href="#home">app store</a>
                    <a className="footer__link" href="#home">Support Center</a>
                    <a className="footer__link" href="#home">Customar Support</a>
                    <a className="footer__link" href="#home">Get In Touch</a>
                </li>

                <li className="footer__item">
                    <h3 className="footer__heading">
                        About
                    </h3>
                    <a className="footer__link" href="#home">app store</a>
                    <a className="footer__link" href="#home">Support Center</a>
                    <a className="footer__link" href="#home">Customar Support</a>
                    <a className="footer__link" href="#home">Get In Touch</a>
                </li>

                <li className="footer__item">
                    <h3 className="footer__heading">
                        About
                    </h3>
                    <a className="footer__link links" href=" Jhonesing567@gmail.com"><span className="bg-img link__img"></span> Jhonesing567@gmail.com</a>
                    <a className="footer__link links" href="1-888-058-3728"><span className="bg-img link__img2"></span> 1-888-058-3728</a>
                    <a className="footer__link links" href="1-888-058-3728"><span className="bg-img link__img3"></span> 1-888-058-3728</a>

                    <div className="socials__box">
                        <a className="footer__socials1 socials" href="https://www.facebook.com/"></a>
                        <a className="footer__socials2 socials" href="https://www.linkedin.com"></a>
                        <a className="footer__socials3 socials" href="https://www.instagram.com"></a>
                        <a className="footer__socials4 socials" href="https://www.apple.com "></a>  
                    </div> 
                </li>
            </ul>
            

        </div>
        <hr/>
        <div className="container">
            <div className="footer__wrapper">
                <p className="copiright">
                    @Copyrignt 2021
                </p>
                <div className="box">
                    <p className="copiright">Privecy Policy</p>
                    <p className="copiright">Webdesign</p>
                </div>
            </div>
        </div>
    </section>
        
        </>

    );
}

export default Footer;