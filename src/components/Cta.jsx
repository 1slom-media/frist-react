import './style.css';
import AppStore from "../images/app-store.png";
import PlayMarket from "../images/google-play.png";
import Phone from "../images/phone.png";


function Cta(){

    return (

        <>
         <section className="cta" id='getApps'>
           <div className="container cta__container">
            <div className="cta__wrapper">
                <h2 className="cta__heading">Bringing the game to Everyone`s Life</h2>
                <p className="cta__text">Let`s check out some of the cool gaming for game.</p>
                <a className="cta__link" href="https://play.google.com"><img className="cta__socials-img" src={AppStore} width="153" height="42" alt=""/></a>
                <a className="cta__link" href="https://www.apple.com"><img className="cta__socials-img" src={PlayMarket} width="153" height="42" alt=""/></a>
            </div>
            <img className="cta__img" src={Phone} width="360" height="600" alt=""/>

          </div>
         </section>
              
        
        </>


    );
}

export default Cta;