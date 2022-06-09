import './style.css';
import Logo from "../images/logo.svg";

function App() {

  return (
  <>
   <header className="header">
        <div className="curtain">
            <div className="container">
                <div className="nav">
                    <a className="logo__link" href="index.html"><img src={Logo}  width="67" height="67"  alt="kompany logo" /></a>
                    <div className="nav__wrapper">
                        <ul className="nav__list">
                            <li className="nav__item"><a className="nav__item-link nav__item-active" href="#home">home</a></li>
                            <li className="nav__item"><a className="nav__item-link" href="#features">features</a></li>
                            <li className="nav__item"><a className="nav__item-link" href="#works">how it works</a></li>
                            <li className="nav__item"><a href="#getApps" className="nav__item-link">get apps</a></li>
                        </ul>
                        <a className="nav__link" href="#getApps">sign up</a>
                    </div>
                </div>
                <div className="hero" id='home'>
                    <div className='hero__content'>
                        <h1 className="hero__heading">
                            Best games at best price.
                        </h1>
                        <h4 className="hero__small-heading">
                            Adding Fun to your Life.
                        </h4>
                        <p className="hero__text">
                            <span className="hero__span">Starting a game store business</span> can be an exciting way to achieve your entrepreneurial dreams while doing something that you love.
                        </p>
                        <div className="hero__buttons">
                            <a className="hero__link" href="#home">try for free</a>
                            <button className="hero__button">get the apps</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </header>
  </>
  );
}

export default App;
