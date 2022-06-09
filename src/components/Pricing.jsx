import './style.css';
import Geroy1 from "../images/pricing1-img.png";
import Geroy2 from "../images/pricing2-img.png";
import Geroy3 from "../images/pricing3-img.png";
import Geroy4 from "../images/pricing4-img.png";

function Pricing(){
    return(
        <>
         <section className="pricing">
         <div className="container">
            <h2 className="pricing__heading">Games On Sale</h2>
            <p className="pricing__text">
                Starting a game store business can be an exciting way to achieve
            </p>

            <ul className="pricing__list">
                <li className="pricing__item">
                    <h5 className="pricing__list-heading">Old World</h5>
                    <p className="pricing__list-text">Mohawk Games Predator Hunt...</p>
                    <div className="pricing__list-wrapper">
                        <p className="pricing__item-text">-10%</p>
                        <del className="pricing__del">$15.99</del>
                        <p className="pricing__list-sell">$14.39</p>
                    </div>
                    <img className="pricing__img" src={Geroy1} width="261" height="339" alt=""/>
                </li>
                <li className="pricing__item">
                    <h5 className="pricing__list-heading">Horizon Zero Dawn™ Complete...</h5>
                    <p className="pricing__list-text">Guerrilla | Sony Interactive Entert...</p>
                    <div className="pricing__list-wrapper">
                        <p className="pricing__item-text">-40%</p>
                        <del className="pricing__del">$19.99</del>
                        <p className="pricing__list-sell">$11.99</p>
                    </div>
                    <img className="pricing__img" src={Geroy2} width="261" height="339" alt=""/>
                </li>

                <li className="pricing__item">
                    <h5 className="pricing__list-heading">Predator Hunting Grounds</h5>
                    <p className="pricing__list-text">IllFonic | Sony Interactive Enterta...</p>
                    <div className="pricing__list-wrapper">
                        <p className="pricing__item-text">-40%</p>
                        <del className="pricing__del">$29.99</del>
                        <p className="pricing__list-sell">$15.59</p>
                    </div>
                    <img className="pricing__img" src={Geroy3} width="261" height="339" alt=""/>
                </li>

                <li className="pricing__item">
                    <h5 className="pricing__list-heading">Disciples: Liberation</h5>
                    <p className="pricing__list-text">Frima Studio | Kalypso Media</p>
                    <div className="pricing__list-wrapper">
                        <p className="pricing__item-text">-10%</p>
                        <del className="pricing__del">$15.99</del>
                        <p className="pricing__list-sell">$14.39</p>
                    </div>
                    <img className="pricing__img" src={Geroy4} width="261" height="339" alt=""/>
                </li>
            </ul>
        </div>
      </section>

    </>
    );
}

export default Pricing;
